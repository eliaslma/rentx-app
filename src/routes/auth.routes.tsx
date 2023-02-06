import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Splash } from '@myapp/screens/Splash';
import { OnboardFirstStep } from '@myapp/screens/Onboard/OnboardFirstStep';
import { OnboardSecondStep } from '@myapp/screens/Onboard/OnboardSecondStep';
import { OnboardMain } from '@myapp/screens/Onboard/OnboardMain';
import { SignIn } from '@myapp/screens/SignIn';
import { SignUpFirstStep } from '@myapp/screens/SignUp/FirstStep';
import { SignUpSecondStep } from '@myapp/screens/SignUp/SecondStep';
import { RegistrationSuccess } from '@myapp/screens/RegistrationSuccess';

export function AuthRoutes() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Splash" component={Splash} options={{gestureEnabled: false}}/>
            <Stack.Screen name="OnboardFirstStep" component={OnboardFirstStep} options={{gestureEnabled: false}}/>
            <Stack.Screen name="OnboardSecondStep" component={OnboardSecondStep}/>
            <Stack.Screen name="OnboardMain" component={OnboardMain} options={{gestureEnabled: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUpFirstStep" component={SignUpFirstStep} />
            <Stack.Screen name="SignUpSecondStep" component={SignUpSecondStep} />
            <Stack.Screen name="RegistrationSuccess" component={RegistrationSuccess} options={{gestureEnabled: false}}/>
        </Stack.Navigator>
    );
}