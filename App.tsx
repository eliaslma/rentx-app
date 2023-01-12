import React from 'react';
import { useFonts } from 'expo-font';
import { Home } from '@myapp/screens/Home';
import theme from '@myapp/global/styles/theme';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { LoadContainer } from '@myapp/screens/Home/styles';

import {
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter'

import {
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'


export default function App(){

    const [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Archivo_400Regular,
        Archivo_500Medium,
        Archivo_600SemiBold,
    }); 

    if(!fontsLoaded){
        return (
            <LoadContainer>
                <ActivityIndicator color="black" size="large"/>
            </LoadContainer>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    );
}

