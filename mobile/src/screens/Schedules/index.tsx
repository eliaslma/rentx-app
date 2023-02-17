import React, { useCallback, useState, useRef } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { useNetInfo } from '@react-native-community/netinfo';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import FlashMessage from 'react-native-flash-message';

import { CarDTO } from '@myapp/dtos/CarDTO';
import { api } from '@myapp/services/api';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import { Loader } from '@myapp/components/Loader';
import { ScheduleCard } from '@myapp/components/ScheduleCard';

import {
    Container,
    Header,
    Title,
    Subtitle,
    SchedulesList,
    SchedulesTitle,
    SchedulesCompleted,
    Quantity,
} from './styles';

interface Schedule {
    user_id: string;
    car: CarDTO;
    start_date: string;
    end_date: string;
}

export function Schedules() {
    const netInfo = useNetInfo();
    const schedulesFlashMessage = useRef(null);
    const theme = useTheme();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [schedules, setSchedules] = useState<Schedule[]>([]);


    async function getSchedulesList() {
        setLoading(true);
        try {
            const schedulesByUser = await api.get('rentals');
            setSchedules(schedulesByUser.data);
            schedulesFlashMessage.current.hideMessage()
        } catch (error) {
            schedulesFlashMessage.current.showMessage({
                message: "Serviço indisponível",
                description: "Não foi possível atualizar a lista de agendamentos..",
                type: "danger",
                animationDuration: 450,
                style: { backgroundColor: theme.colors.main }
            })
            console.log('Erro ao atualizar lista de agendamentos', error)
        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(
        useCallback(() => {
            if (netInfo.isConnected === true) {
                getSchedulesList();
            } else if (netInfo.isConnected === false) {
                schedulesFlashMessage.current.showMessage({
                    message: "Sem conexão",
                    description: "Conecte-se para atualizar a lista de agendamentos..",
                    type: "danger",
                    animationDuration: 450,
                    style: { backgroundColor: theme.colors.main }
                })
            }
        }, [netInfo.isConnected])
    );

    function renderItem({ item }: { item: Schedule }) {
        return (
            <ScheduleCard
                data={item.car}
                icon={getSpecIcon(item.car.fuel_type)}
                startDate={item.start_date}
                endDate={item.end_date}
            />
        );
    }

    return (
        <Container>
            <FlashMessage position="bottom" autoHide={false} ref={schedulesFlashMessage} />
            <StatusBar
                style='light'
                translucent={false}
                backgroundColor={theme.colors.header}
            />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + 20 }}>
                <Title>Seus agendamentos, estão aqui.</Title>
                <Subtitle>Conforto, segurança e praticidade.</Subtitle>
            </Header>
            {isLoading ? (
                <Loader />
            ) : (
                <SchedulesList>
                    <SchedulesTitle>
                        <SchedulesCompleted>Agendamentos feitos</SchedulesCompleted>
                        <Quantity>{schedules.length}</Quantity>
                    </SchedulesTitle>
                    <FlatList
                        data={schedules}
                        style={styles.containerList}
                        contentContainerStyle={styles.contentList}
                        showsVerticalScrollIndicator={false}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SchedulesList>
            )}
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
        paddingBottom: 16,
    },
});
