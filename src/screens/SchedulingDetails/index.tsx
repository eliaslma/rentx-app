import React, { useState } from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import differenceInDays from 'date-fns/differenceInDays';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

import { api } from '@myapp/services/api';
import { CarDTO } from '@myapp/dtos/CarDTO';
import Calendar from '../../assets/calendar.svg'
import { DefaultButton } from '@myapp/components/DefaultButton';
import { CarSpec } from '@myapp/components/CarSpec';
import { BackButton } from '@myapp/components/BackButton';
import { ImageSlider } from '@myapp/components/ImageSlider';

import {
    Container,
    Header,
    HeaderContent,
    Content,
    Description,
    Model,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    ModelSpec,
    Details,
    Icon,
    DateInfo,
    DateTitle,
    DateValue,
    Date,
    Daily,
    TotalDaily,
    PriceTitle,
    PriceInfo,
    DailyPrice,
    Days,
    TotalPrice,
    Footer,

} from './styles';

interface Params {
    car: CarDTO;
    rentalPeriod: {
        startDate: number;
        startDateFormatted: string;
        endDate: number;
        endDateFormatted: string;
    }
    markedDates: string[];
}

export function SchedulingDetails({ navigation }) {

    const theme = useTheme();
    const route = useRoute();
    const [isLoading, setLoading] = useState<boolean>()
    const { car, rentalPeriod, markedDates } = route.params as Params

    const diaries = differenceInDays(
        rentalPeriod.endDate,
        rentalPeriod.startDate,
    )

    const totalPrice = diaries * car.price

    async function handleConfirmScheduling() {

        try {
            setLoading(true)
            const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`)

            const unavailable_dates = [
                ...schedulesByCar.data.unavailable_dates,
                ...markedDates
            ]

            api.put(`/schedules_bycars/${car.id}`, {
                id: car.id,
                unavailable_dates
            })
            .then(() => {
                api.post(`schedules_byuser`, {
                    user_id: 1,
                    car: car,
                    startDate: rentalPeriod.startDateFormatted,
                    endDate: rentalPeriod.endDateFormatted,
                })
                .then(() => navigation.navigate('SchedulingSuccess'))
                .catch(() => Alert.alert('Sem conexão', 'Não foi possível confirmar o agendamento'))
                .finally(() => setLoading(false))
            })
            .catch(() => Alert.alert('Sem conexão', 'Não foi possível confirmar o agendamento'))
        } catch (error) {
            setLoading(false)
            Alert.alert('Sem conexão', 'Não foi possível confirmar o agendamento')
            console.log(error)
        }

    }

    return (

        <Container>
            <StatusBar style='dark' translucent={false} backgroundColor={'white'} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                <HeaderContent>
                    <BackButton onPress={() => navigation.goBack()} />
                </HeaderContent>
            </Header>
            <ImageSlider imagesUrl={car.photos} />
            <Content>
                <Description>
                    <Model>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Model>
                    <Rent>
                        <Period>{car.period}</Period>
                        <Price>R$ {car.price}</Price>
                    </Rent>
                </Description>
                <ModelSpec>
                    {
                        car.accessories.map(spec => (
                            <CarSpec icon={getSpecIcon(spec.type)} name={spec.name} key={spec.type} />
                        ))
                    }
                </ModelSpec>
                <Details>
                    <Date>
                        <Icon>
                            <Calendar />
                        </Icon>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>{rentalPeriod.startDateFormatted}</DateValue>
                        </DateInfo>
                        <Feather
                            size={24}
                            color={theme.colors.text_detail}
                            name={'chevron-right'}
                        />
                        <DateInfo>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue>{rentalPeriod.endDateFormatted}</DateValue>
                        </DateInfo>
                    </Date>
                    <Daily>
                        <TotalDaily>
                            <PriceTitle>TOTAL</PriceTitle>
                            <PriceInfo>
                                <DailyPrice>R$ {car.price}</DailyPrice>
                                <Days> x{diaries} { diaries == 1 ? 'diária' : 'diárias'}</Days>
                            </PriceInfo>
                        </TotalDaily>
                        <TotalPrice>R$ {totalPrice}</TotalPrice>
                    </Daily>
                </Details>
            </Content>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() }}>
                <DefaultButton
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmScheduling}
                    enabled={!isLoading}
                    loading={isLoading}
                />
            </Footer>
        </Container>
    );
}