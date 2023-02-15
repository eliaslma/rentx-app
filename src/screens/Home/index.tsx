import React, { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message";
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNetInfo } from '@react-native-community/netinfo';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '@myapp/services/api';
import Logo from '../../assets/logo.svg'
import { CarDTO } from '@myapp/dtos/CarDTO';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import { Loader } from '@myapp/components/Loader';
import { CardCar } from '@myapp/components/CardCar';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
} from './styles';

export function Home({ navigation }) {

    const theme = useTheme()
    const netInfo = useNetInfo()
    const [carList, setCarList] = useState<CarDTO[]>([])
    const [isLoading, setLoading] = useState<boolean>()
    const carsStorageKey = '@rentx:cars';


    async function getCarList(isConnected: boolean) {

        setLoading(true)

        if (isConnected) {
            api.get('/cars')
                .then((response) => {
                    hideMessage()
                    setCarList(response.data)
                    setCarsLocalStorage(response.data)
                    setLoading(false)
                })
                .catch((error) => {
                    showMessageError("Serviço indisponível", "Não foi possível atualizar a listagem de veículos")
                    getCarList(false)
                    console.log('Erro no carregamento da lista de carros!', error)
                })
        } else {
            const carList = await AsyncStorage.getItem(carsStorageKey)
            if (carList) {
                setLoading(false)
                const carListDataFormatted = JSON.parse(carList) as CarDTO[]
                setCarList(carListDataFormatted)
            }
        }
    }

    async function setCarsLocalStorage(carList: CarDTO) {
        try {
            await AsyncStorage.setItem(carsStorageKey, JSON.stringify(carList))
        } catch (e) {
            console.log(e)
        }
    }

    function handleCarDetails(car: CarDTO) {
        navigation.navigate('CarDetails', { car })
    }

    function showMessageError(message: string, description?: string) {
        showMessage({
            message: message,
            description: description,
            type: "danger",
            animationDuration: 450,
            style: { backgroundColor: theme.colors.main },
        });
    }

    useFocusEffect(
        useCallback(() => {
            if (netInfo.isConnected === true) {
                getCarList(netInfo.isConnected)
            } else if ((netInfo.isConnected === false)) {
                showMessageError("Você está offline", "Conecte-se para prosseguir com o agendamento..");
                getCarList(false)
            }
        }, [netInfo.isConnected])
    );

    return (
        <Container>
            <StatusBar style="light" translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)} />
                    <TotalCars>Total de {carList.length} carros</TotalCars>
                </HeaderContent>
            </Header>
            {isLoading ? <Loader /> :
                <FlatList
                    data={carList}
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <CardCar data={item} icon={getSpecIcon(item.fuel_type)} onPress={() => handleCarDetails(item)} />
                    )}
                />
            }
            <FlashMessage position="bottom" autoHide={false} floating={true} />
        </Container>
    );
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    contentList: {
        paddingBottom: getBottomSpace()
    },
})