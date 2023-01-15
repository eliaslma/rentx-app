import React from 'react';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';


import speed from '../../assets/speed.svg'
import acceleration from '../../assets/acceleration.svg'
import horsePower from '../../assets/force.svg'
import gasoline from '../../assets/gasoline.svg'
import exchange from '../../assets/exchange.svg'
import people from '../../assets/people.svg'

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
    AboutCar,
    Footer

} from './styles';


export function CarDetails(){

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
                <AboutCar>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide
                    indultado na praça Real Maestranza de Sevilla. É um belíssimo
                    carro para quem gosta de acelerar.
                </AboutCar>
            </Content>
            <Footer style={isIphoneX() && {paddingBottom: getBottomSpace()}}>
                <DefaultButton title="Escolher período do aluguel"/>
            </Footer>        
        </Container>
    );
}