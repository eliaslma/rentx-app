import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import { CarDTO } from '@myapp/dtos/CarDTO';
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


export interface Params {
    car: CarDTO;
}

export function CarDetails({ navigation }) {

    const route = useRoute();
    const { car } = route.params as Params

    function handleScheduling() {
        navigation.navigate('Scheduling', {car})
    }

    return (
        <Container>
            <StatusBar style={'dark'} translucent={false} backgroundColor={'white'} />
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
                <AboutCar>{car.about}</AboutCar>
            </Content>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() }}>
                <DefaultButton title="Escolher período do aluguel" onPress={handleScheduling} />
            </Footer>
        </Container>
    );
}