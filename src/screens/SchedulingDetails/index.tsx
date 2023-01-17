import React from 'react';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components';

import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import horsePower from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'
import Calendar from '../../assets/calendar.svg'
import Arrow from '../../assets/arrow.svg'

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


export function SchedulingDetails(){

    const theme = useTheme();

    return(
        <Container>
            <Header style={ isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <BackButton onPress={() => {}}/>
                </HeaderContent>
            </Header>
            <ImageSlider imagesUrl={['https://belowinvoice.com/wp-content/uploads/2021/04/Lamborguine-Huracan-Coupe-Rosso-Mars.png']}/>
            <Content>
                <Description>
                    <Model>
                        <Brand>lamborguini</Brand>
                        <Name>Huracan</Name>
                    </Model>
                    <Rent>
                        <Period>ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>
                </Description>
                <ModelSpec>
                    <CarSpec icon={speed} name={'380km/h'}/>
                    <CarSpec icon={acceleration} name={'3.2s'}/>
                    <CarSpec icon={horsePower} name={'800 HP'}/>
                    <CarSpec icon={gasoline} name={'Gasolina'}/>
                    <CarSpec icon={exchange} name={'Auto'}/>
                    <CarSpec icon={people} name={'800 HP'}/>
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
                <DefaultButton title="Alugar agora" color={theme.colors.success}/>
            </Footer>        
        </Container>
    );
}