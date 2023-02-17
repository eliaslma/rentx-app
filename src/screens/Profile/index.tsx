import React, { useState, useCallback, useRef } from 'react';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { useFocusEffect } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import { useNetInfo } from '@react-native-community/netinfo';
import { useAuth } from '@myapp/hooks/auth';
import { useTheme } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { api } from '@myapp/services/api';
import { CarDTO } from '@myapp/dtos/CarDTO';
import { CardCar } from '@myapp/components/CardCar';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';

import {
    Container,
    Header,
    ProfileOptions,
    IconWrapper,
    Icon,
    Title,
    UserInfo,
    Photo,
    Name,
    Schedules,
    SchedulesDone,
    Totalschedules,
    Favorite,
    CardWrapper,
    FavoriteCar,
    SchedulingFrequency,
} from './styles';


export function Profile({ navigation }) {

    const [totalSchedules, setTotalSchedeules] = useState<number>();
    const [schedulingFrequency, setSchedulingFrequencty] = useState<number>();
    const [favoriteCar, setFavoriteCar] = useState<CarDTO>({} as CarDTO)
    const netInfo = useNetInfo();
    const { user } = useAuth()
    const theme = useTheme()
    const profileFlashMessage = useRef(null);

    function getFavoriteCar(schedules) {
        let freq = {}
        let maxFreq = 0
        let favoriteCar = null

        for (let i = schedules.length - 1; i >= 0; i--) {
            const { car_id, car } = schedules[i]
            freq[car_id] = (freq[car_id] || 0) + 1
            if (freq[car_id] > maxFreq) {
                maxFreq = freq[car_id]
                favoriteCar = car
            }
        }
        setTotalSchedeules(schedules.length)
        setSchedulingFrequencty(maxFreq)
        setFavoriteCar(favoriteCar)

    }

    async function getSchedules() {
        try {
            const userSchedules = await api.get('rentals');
            getFavoriteCar(userSchedules.data)
            profileFlashMessage.current.hideMessage()
        } catch (error) {
            profileFlashMessage.current.showMessage({
                message: "Serviço indisponível",
                description: "Não foi possível atualizar os dados..",
                type: "danger",
                animationDuration: 450,
                style: { backgroundColor: theme.colors.main }
            })
            console.log('Erro ao atualizar lista de agendamentos', error)
        }
    }

    useFocusEffect(
        useCallback(() => {
            if (netInfo.isConnected === true) {
                getSchedules()
            } else if (netInfo.isConnected === false) {
                profileFlashMessage.current.showMessage({
                    message: "Sem conexão",
                    description: "Conecte-se para atualizar os dados..",
                    type: "danger",
                    animationDuration: 450,
                    style: { backgroundColor: theme.colors.main }
                })
            }
        }, [netInfo.isConnected])
    );

    return (
        <Container>
            <StatusBar style={'light'} translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 30 }}>
                <ProfileOptions>
                    <IconWrapper onPress={() => navigation.navigate('EditProfile')}>
                        <Icon name="edit-3" />
                    </IconWrapper>
                    <Title>Perfil</Title>
                    <IconWrapper onPress={() => navigation.navigate('SignOut')}>
                        <Icon name="power" />
                    </IconWrapper>
                </ProfileOptions>
            </Header>
            <UserInfo>
                <Photo source={{ uri: user.avatar ? user.avatar : 'https://www.kuppingercole.com/pics//defperson.jpg' }} />
                <Name>{user.name}</Name>
            </UserInfo>
            <Schedules>
                <SchedulesDone>Agendamentos feitos</SchedulesDone>
                <Totalschedules>{totalSchedules}</Totalschedules>
            </Schedules>
            <Favorite>
                <FavoriteCar>Carro favorito</FavoriteCar>
                <SchedulingFrequency>{!schedulingFrequency ? '0' :
                    schedulingFrequency > 1 ? `Utilizado ${schedulingFrequency} vezes` : 'Utilizado 1 vez'}
                </SchedulingFrequency>
            </Favorite>
            <CardWrapper>
                {!!favoriteCar && <CardCar data={favoriteCar} icon={getSpecIcon(favoriteCar.fuel_type)} />}
            </CardWrapper>
            <FlashMessage position="bottom" autoHide={false} ref={profileFlashMessage} />
        </Container>
    );
}