import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import { Home } from '@myapp/screens/Home';
import { CarDetails } from '@myapp/screens/CarDetails';
import { Scheduling } from '@myapp/screens/Scheduling';
import { SchedulingDetails } from '@myapp/screens/SchedulingDetails';
import { SchedulingSuccess } from '@myapp/screens/SchedulingSuccess';

export function StackRoutes(){

    const Stack = createNativeStackNavigator()

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="CarDetails" component={CarDetails}/>
            <Stack.Screen name="Scheduling" component={Scheduling}/>
            <Stack.Screen name="SchedulingDetails" component={SchedulingDetails}/>
            <Stack.Screen name="SchedulingSuccess" component={SchedulingSuccess} options={{ gestureEnabled: false}}/>
        </Stack.Navigator>
        
    );
}