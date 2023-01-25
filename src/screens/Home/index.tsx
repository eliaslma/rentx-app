import React from 'react';
import { FlatList, Platform, Modal, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import { api } from '@myapp/services/api';
import Logo from '../../assets/logo.svg'
import { CarDTO } from '@myapp/dtos/CarDTO';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import { Loader } from '@myapp/components/Loader';
import { CardCar } from '@myapp/components/CardCar';
import { SchedulesButton } from '@myapp/components/SchedulesButton';
import { Schedules } from '../Schedules';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    SchedulesButtonWrapper,
} from './styles';


export function Home({navigation}){

    const [carList,setCarList] = useState<CarDTO[]>([])
    const [isLoading, setLoading] = useState<boolean>()
    const [modalVisible, setModalVisible] = useState(false);
    
    const theme = useTheme()

    async function getCarList(){
        try{
            setLoading(true)
            const response = await api.get('/cars')
            setCarList(response.data)
        }catch(e){
            
            Alert.alert('Sem conexão', 'O aparalho está desconectado da internet',[
                {text: 'OK', onPress: () => getCarList()}
                ]
                )
            console.log(e)
            
        }
        finally{
            setLoading(false)
        }
    }

    function handleCarDetails(car: CarDTO){
        navigation.navigate('CarDetails', {car} )
    }

    function handleCloseModal(){
        setModalVisible(false)
    }

    useEffect(() => {
        getCarList()
    },[])
    
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
            <Modal visible={modalVisible} animationType="fade">
                <Schedules handleCloseModal={handleCloseModal}/>
            </Modal>
            <SchedulesButtonWrapper style={ Platform.OS === 'ios' && { paddingBottom: getBottomSpace()} }>
                <SchedulesButton onPress={() => setModalVisible(true)}/>
            </SchedulesButtonWrapper>
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