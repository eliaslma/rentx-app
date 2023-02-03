import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { OnboardMain } from '@myapp/screens/Onboard/OnboardMain';
import { SignIn } from '@myapp/screens/SignIn';
import { SignUpFirstStep } from '@myapp/screens/SignUp/FirstStep';
import { SignUpSecondStep } from '@myapp/screens/SignUp/SecondStep';
import { RegistrationSuccess } from '@myapp/screens/RegistrationSuccess';

export function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnboardMain" component={OnboardMain} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUpFirstStep" component={SignUpFirstStep} />
            <Stack.Screen name="SignUpSecondStep" component={SignUpSecondStep} />
            <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccess} />
        </Stack.Navigator>
    );
}