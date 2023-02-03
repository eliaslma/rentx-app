import React from 'react';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { Routes } from '@myapp/routes';

import { Loader } from '@myapp/components/Loader';
import theme from '@myapp/global/styles/theme';
import { ThemeProvider } from 'styled-components';
import 'react-native-gesture-handler';
import { AppProvider } from '@myapp/hooks';


import {
    Inter_400Regular,
    Inter_500Medium
} from '@expo-google-fonts/inter'

import {
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'


import { RegistrationSuccess } from '@myapp/screens/RegistrationSuccess';
import { ChangesCompleted } from '@myapp/screens/ChangesCompleted';
import { SignOut } from '@myapp/screens/SignOut';
import { SignIn } from '@myapp/screens/SignIn';
import { SignUpFirstStep } from '@myapp/screens/SignUp/FirstStep';
import { SignUpSecondStep } from '@myapp/screens/SignUp/SecondStep';

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
            <Loader/>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <Routes/>
            </AppProvider>
        </ThemeProvider>
    );
}

