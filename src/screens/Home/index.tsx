import React from 'react';
import Logo from '../../assets/logo.svg'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars
} from './styles';

export function Home(){
    const theme = useTheme()
    return (
        <Container>
            <StatusBar style="light" translucent={false} backgroundColor={theme.colors.header}/>
            <Header style={isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <HeaderContent>
                    <Logo width={RFValue(108)} height={RFValue(12)}/>
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>
        </Container>
   );
}