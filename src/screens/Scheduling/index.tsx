import React from 'react';
import Arrow from '../../assets/arrow.svg'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { BackButton } from '@myapp/components/BackButton';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import {
    Container,
    Header,
    HeaderContent,
    Title,
    ChooseDate,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';

export function Scheduling(){

    const theme = useTheme();

    return(
        <Container>
            <StatusBar style='light' translucent={false}/>
            <Header style={isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <BackButton color={theme.colors.background_secondary} onPress={() => { console.log('botão clicado')}}/>
                    <Title>
                        Escolha uma {'\n'}
                        data de início e {'\n'}
                        fim do aluguel
                    </Title>
                    <ChooseDate>
                        <DateInfo selected={false}>
                            <DateTitle>DE</DateTitle>
                            <DateValue>18/06/2021</DateValue>
                        </DateInfo>
                        <Arrow/>
                        <DateInfo selected={false}>
                            <DateTitle>ATÉ</DateTitle>
                            <DateValue>18/06/2021</DateValue>
                        </DateInfo>
                    </ChooseDate>
                </HeaderContent>
            </Header>
            
            <Content>

            </Content>
            <Footer>

            </Footer>
        </Container>
    );
}