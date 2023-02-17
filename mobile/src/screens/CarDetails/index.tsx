import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useRoute } from '@react-navigation/native';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { useNetInfo } from '@react-native-community/netinfo';
import { api } from '@myapp/services/api';
import { useTheme } from 'styled-components';

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
    const [carUpdated, setCarUpdated] = useState<CarDTO>({} as CarDTO)
    const netInfo = useNetInfo()
    const theme = useTheme();

    function handleScheduling() {
        navigation.navigate('Scheduling', {car: carUpdated})
    }

    useFocusEffect(
        useCallback(() => {

            async function fetchUpdatedCar(){
                api.get(`/cars/${car.id}`)
                .then((response) => {
                    setCarUpdated(response.data)
                }).catch((error) => {
                    setCarUpdated({} as CarDTO)
                    console.log('Erro ao capturar dados atualizado sobre o carro',error)
                })
            }
    
            if(netInfo.isConnected === true){
                fetchUpdatedCar()
            }
        },[netInfo.isConnected])
    );
   
    return (
        <Container>
            <StatusBar style='auto' translucent={false} backgroundColor={netInfo.isConnected && carUpdated.id ? theme.colors.background_secondary : theme.colors.main}/>
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
                            <CarSpec icon={getSpecIcon(spec.type)} name={spec.name} key={spec.name} />
                        ))
                    }
                </ModelSpec>
                <AboutCar>{car.about}</AboutCar>
            </Content>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() }}>
                <DefaultButton title="Escolher período do aluguel" onPress={handleScheduling} enabled={netInfo.isConnected === true && !!carUpdated.id} />
            </Footer>
        </Container>
    );
}