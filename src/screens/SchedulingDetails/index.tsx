import React from 'react';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';

import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import horsePower from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'
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
import { CarDTO } from '@myapp/dtos/CarDTO';
import { CardCar } from '@myapp/components/CardCar';

interface Params {
    car: CarDTO;
}


export function SchedulingDetails({navigation}){

    const theme = useTheme();
    const route = useRoute()
    const { car } = route.params as Params
    
    function handleConfirmScheduling(){
        navigation.navigate('SchedulingSuccess')
    }

    return(
        <Container>
            <StatusBar style='dark' translucent={false} backgroundColor={'white'}/>
            <Header style={ isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <BackButton onPress={() => navigation.goBack()}/>
                </HeaderContent>
            </Header>
            <ImageSlider imagesUrl={car.photos}/>
            <Content>
                <Description>
                    <Model>
                        <Brand>{car.brand}</Brand>
                        <Name>{car.name}</Name>
                    </Model>
                    <Rent>
                        <Period>{car.rent.period}</Period>
                        <Price>R$ {car.rent.price}</Price>
                    </Rent>
                </Description>
                <ModelSpec>
                    {
                        car.accessories.map(spec => (
                        <CarSpec icon={getSpecIcon(spec.type)} name={spec.name} key={spec.name} />
                        ))
                    }
                </ModelSpec>
                <Details>
                    <Date>
                        <Icon>
                            <Calendar/>
                        </Icon>
                        <DateInfo>
                            <DateTitle>DE</DateTitle>
                            <DateValue>18/06/2023</DateValue>
                        </DateInfo>
                        <Feather 
                            size={24}
                            color={theme.colors.text_detail}
                            name={'chevron-right'}
                        />
                        <DateInfo>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue>20/06/2023</DateValue>
                        </DateInfo>
                    </Date>
                    <Daily>
                        <TotalDaily>
                            <PriceTitle>TOTAL</PriceTitle>
                            <PriceInfo>
                                <DailyPrice>R$ 580</DailyPrice>
                                <Days> x3 diárias</Days>
                            </PriceInfo>
                        </TotalDaily>
                        <TotalPrice>R$ 2.900</TotalPrice>
                    </Daily>
                </Details>
            </Content>
            <Footer style={isIphoneX() && {paddingBottom: getBottomSpace()}}>
                <DefaultButton title="Alugar agora" color={theme.colors.success} onPress={handleConfirmScheduling}/>
            </Footer>        
        </Container>
    );
}