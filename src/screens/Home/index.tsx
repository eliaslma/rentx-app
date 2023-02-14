import React from 'react';
import { FlatList, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
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
import { useAuth } from '@myapp/hooks/auth';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
} from './styles';

export function Home({navigation}){

    const theme = useTheme()
    const netInfo = useNetInfo()
    const { user } = useAuth();
    const [carList,setCarList] = useState<CarDTO[]>([])
    const [isLoading, setLoading] = useState<boolean>()
    const carsStorageKey = '@rentx:cars';
    

    async function getCarList(isConnected: boolean){

        setLoading(true)

        if(isConnected){
            await api.get('/cars')
            .then((response) => {
                setCarList(response.data)
                setCarsLocalStorage(response.data)
                setLoading(false) })
            .catch((error) => {
                Alert.alert('Sem conexão', 'O aparalho está desconectado da internet',[
                    {text: 'OK', onPress: () => getCarList(false)}
                ])
                console.log(error)
            })
        }else{
            const carList = await AsyncStorage.getItem(carsStorageKey)
            if (carList) {
                setLoading(false)
                const carListDataFormatted = JSON.parse(carList) as CarDTO[]
                setCarList(carListDataFormatted)
            }
        }
    }

    async function setCarsLocalStorage(carList: CarDTO){
        try {
            await AsyncStorage.setItem(carsStorageKey, JSON.stringify(carList))
        } catch (e) {
            console.log(e)
        }
    }

    async function offlineSynchronize(){
        await api.post('/users/sync', {
            created: [],
			deleted: [],
			updated: [{
				user_id: user.id,
   				name: user.name,
   				driver_license: user.driver_license,
   				avatar: user.avatar
			}]
        })
    }

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', {car} )
    }

    useEffect(() => {
        if(netInfo.isConnected){
            offlineSynchronize()
            getCarList(netInfo.isConnected)
        }else{
            getCarList(false)
        }
        
    },[netInfo.isConnected])

    return (
        <Container>
            <StatusBar style="light" translucent={false} backgroundColor={theme.colors.header}/>
            <Header style={isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)}/>
                    <TotalCars>Total de {carList.length} carros</TotalCars>
                </HeaderContent>
            </Header>
            {   isLoading ? <Loader/> :   
                <FlatList
                    data={carList}
                    style={styles.containerList}
                    contentContainerStyle={styles.contentList}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => (
                        <CardCar data={item} icon={getSpecIcon(item.fuel_type)} onPress={() => handleCarDetails(item)}/>
                    )}
                />
            }
        </Container>
   );
}

const styles = StyleSheet.create({
    containerList: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    contentList:{
        paddingBottom: getBottomSpace()
    }, 
})