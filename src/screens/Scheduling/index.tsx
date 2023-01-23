import React, { useState } from 'react';
import Arrow from '../../assets/arrow.svg'
import { CarDTO } from '@myapp/dtos/CarDTO';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { DateData } from 'react-native-calendars';
import { useRoute } from '@react-navigation/native';
import { Calendar, MarkedDateProps } from '@myapp/components/Calendar';
import { generateInterval } from '@myapp/components/Calendar/generateInterval';
import { BackButton } from '@myapp/components/BackButton';
import { DefaultButton } from '@myapp/components/DefaultButton';
import { getStatusBarHeight, isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';
import { getPlatformDate } from '@myapp/utils/getPlatformDate';
import { format } from 'date-fns';
import { Alert } from 'react-native';

import {
    Container,
    Header,
    HeaderContent,
    Title,
    ChooseDate,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';

interface RentalPeriod{
    startDate: string;
    endDate: string;
}

interface Params {
    car: CarDTO;
}


export function Scheduling({navigation}){

    const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData)
    const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
    const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

    const route = useRoute();
    const { car } = route.params as Params

    const theme = useTheme();

    function handleConfirmPeriod(){

        if(!rentalPeriod.startDate){
            Alert.alert('Selecione o período desejado')
        }

        if(rentalPeriod.startDate && rentalPeriod.startDate != rentalPeriod.endDate ) {
            navigation.navigate('SchedulingDetails', {
                car,
                dates: Object.keys(markedDates)
            })
        }

    }

    function handleChangeDate(date: DateData){
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate
        let end = date

        if(start.timestamp > end.timestamp){
            start = end
        }
        setLastSelectedDate(end);
        const interval = generateInterval(start,end)
        setMarkedDates(interval)

        const Period = {
            startDate: format(getPlatformDate( new Date(start.timestamp)),'dd/MM/yyyy'),
            endDate: format(getPlatformDate( new Date(end.timestamp)),'dd/MM/yyyy'),
        }

        setRentalPeriod(Period)
        
    }

    return(
        <Container>
            <StatusBar style='light'  translucent={false} backgroundColor={theme.colors.header}/>
            <Header style={isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <BackButton color={theme.colors.background_secondary} onPress={() => navigation.goBack()}/>
                    <Title>
                        Escolha uma {'\n'}
                        data de início e {'\n'}
                        fim do aluguel
                    </Title>
                    <ChooseDate>
                        <DateInfo selected={!!rentalPeriod.startDate}>
                            <DateTitle>DE</DateTitle>
                            <DateValue>{rentalPeriod.startDate}</DateValue>
                        </DateInfo>
                        <Arrow/>
                        <DateInfo selected={!!rentalPeriod.endDate}>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue>{rentalPeriod.endDate}</DateValue>
                        </DateInfo>
                    </ChooseDate>
                </HeaderContent>
            </Header>
            <Content>
                <Calendar onDayPress={handleChangeDate} markedDates={markedDates}/>
            </Content>
            <Footer style={isIphoneX() && {paddingBottom: getBottomSpace()}}>
                <DefaultButton title="Confirmar" color={!rentalPeriod.startDate && theme.colors.disabled_button}onPress={handleConfirmPeriod}/>
            </Footer>
        </Container>
    );
}