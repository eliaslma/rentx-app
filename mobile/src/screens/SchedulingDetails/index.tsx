import React, { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import differenceInDays from 'date-fns/differenceInDays';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { useNetInfo } from '@react-native-community/netinfo';
import { useAuth } from '@myapp/hooks/auth';
import { getPlatformDate } from '@myapp/utils/getPlatformDate';

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
    TotalPeriod,
    Daily,
    TotalDaily,
    PriceTitle,
    PriceInfo,
    DailyPrice,
    Days,
    TotalPrice,
    Footer,

} from './styles';

import FlashMessage from 'react-native-flash-message';

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

    const myLocalFlashMessage = useRef(null);

    const theme = useTheme();
    const route = useRoute();
    const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
    const netInfo = useNetInfo();
    const [isLoading, setLoading] = useState<boolean>()
    const { user } = useAuth();
    const { car, rentalPeriod, markedDates } = route.params as Params

    const diaries = differenceInDays(
        rentalPeriod.endDate,
        rentalPeriod.startDate,
    )

    const totalPrice = diaries * carUpdated.price

    async function handleConfirmScheduling() {

            setLoading(true)

            api.post('rentals', {
                user_id: user.id,
                car_id: carUpdated.id,
                start_date: getPlatformDate(new Date(rentalPeriod.startDate)),
                end_date: getPlatformDate(new Date(rentalPeriod.endDate)),
                total: totalPrice
            })
            .then(() => {
                navigation.navigate('SchedulingSuccess')
            })
            .catch(() => {
                Alert.alert('Sem conexão', 'Não foi possível confirmar o agendamento')
                setLoading(false)
            })
    }

    useEffect(() => {

        async function fetchUpdatedCar(){
            api.get(`/cars/${car.id}`)
            .then((response) => {
                myLocalFlashMessage.current.hideMessage()
                setCarUpdated(response.data)
            }).catch((error) => {
                setCarUpdated({} as CarDTO)
                myLocalFlashMessage.current.showMessage({
                message: "Serviço indisponível",
                type: "danger",
                animationDuration: 450,
                style: { backgroundColor: theme.colors.main }})
                console.log('Erro ao capturar dados atualizado sobre o carro',error)
            })
        }

        if(netInfo.isConnected === true){
            fetchUpdatedCar()
        }else{
                myLocalFlashMessage.current.showMessage({
                message: "Conecte-se para prosseguir com o agendamento..",
                type: "danger",
                animationDuration: 450,
                style: { backgroundColor: theme.colors.main }})
        }
        

    },[netInfo.isConnected])
    
    return (

        <Container>
            <FlashMessage position="top" autoHide={false} ref={myLocalFlashMessage}/>
            <StatusBar style={'auto'} translucent={false} backgroundColor={netInfo.isConnected && carUpdated.id ? theme.colors.background_secondary : theme.colors.main} />
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
                        <Price>{netInfo.isConnected === true && carUpdated.id ? `R$ ${carUpdated.price}` : '...'}</Price>
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
                    <TotalPeriod>
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
                    </TotalPeriod>
                    <Daily>
                        <TotalDaily>
                            <PriceTitle>TOTAL</PriceTitle>
                            <PriceInfo>
                                <DailyPrice>{netInfo.isConnected === true && carUpdated.id ? `R$ ${carUpdated.price}` : '...'}</DailyPrice>
                                <Days> x{diaries} { diaries == 1 ? 'diária' : 'diárias'}</Days>
                            </PriceInfo>
                        </TotalDaily>
                        <TotalPrice>{netInfo.isConnected === true && carUpdated.id ? `R$ ${totalPrice}` : '...'}</TotalPrice>
                    </Daily>
                </Details>
            </Content>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() }}>
                <DefaultButton
                    title="Alugar agora"
                    color={theme.colors.success}
                    onPress={handleConfirmScheduling}
                    enabled={!isLoading && netInfo.isConnected === true && !!carUpdated.id}
                    loading={isLoading}
                />
            </Footer>
        </Container>
    );
}