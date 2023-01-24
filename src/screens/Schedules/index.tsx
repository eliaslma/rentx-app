import React, { useEffect, useState } from 'react';
import { BackButton } from '@myapp/components/BackButton';
import { StatusBar } from 'expo-status-bar';
import { isIphoneX, getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { CarDTO } from '@myapp/dtos/CarDTO'
import { api } from '@myapp/services/api';
import { getSpecIcon } from '@myapp/utils/getSpecIcon';
import { Loader } from '@myapp/components/Loader';
import { ScheduleCard } from '@myapp/components/ScheduleCard';


import {
    Container,
    Header,
    HeaderContent,
    Title,
    Subtitle,
    SchedulesList,
    SchedulesTitle,
    SchedulesCompleted,
    Quantity,
} from './styles';

interface SchedulesProps {
    user_id: string;
    car: CarDTO;
    startDate: string;
    endDate: string;
}

export function Schedules({ handleCloseModal }) {

    const theme = useTheme();
    const [isLoading, setLoading] = useState(true)
    const [schedules, setSchedules] = useState<SchedulesProps[]>([])

    async function getSchedulesList() {

        try {
            const schedulesByUser = await api.get('schedules_byuser')
            setSchedules(schedulesByUser.data)
        } catch (e) {
            Alert.alert('Não foi possível carregar os agendamentos')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getSchedulesList()
    }, [])

    return (
        <Container>
            <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                <HeaderContent>
                    <BackButton color={theme.colors.background_secondary} onPress={handleCloseModal} />
                    <Title>Seus agendamentos, estão aqui.</Title>
                    <Subtitle>Conforto, segurança e praticidade.</Subtitle>
                </HeaderContent>
            </Header>
            {isLoading ? <Loader /> :
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
                        renderItem={({ item }) => (
                            <ScheduleCard
                                data={item.car}
                                icon={getSpecIcon(item.car.fuel_type)}
                                startDate={item.startDate}
                                endDate={item.endDate}
                            />
                        )}
                    />
                </SchedulesList>
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
    contentList: {
        paddingBottom: getBottomSpace()
    },
})