import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Home Screens
import { Home } from '@myapp/screens/Home';
import { CarDetails } from '@myapp/screens/CarDetails';
import { Scheduling } from '@myapp/screens/Scheduling';
import { SchedulingDetails } from '@myapp/screens/SchedulingDetails';
import { SchedulingSuccess } from '@myapp/screens/SchedulingSuccess';

// Profile Screens
import { Profile } from '@myapp/screens/Profile';
import { EditProfile } from '@myapp/screens/EditProfile';
import { SignOut } from '@myapp/screens/SignOut';


export function HomeRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="CarDetails" component={CarDetails}/>
            <Stack.Screen name="Scheduling" component={Scheduling}/>
            <Stack.Screen name="SchedulingDetails" component={SchedulingDetails}/>
            <Stack.Screen name="SchedulingSuccess" component={SchedulingSuccess}/>
        </Stack.Navigator>
    );
}

export function ProfileRoutes(){

    const Stack = createNativeStackNavigator()
    
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Profile}/>
            <Stack.Screen name="EditProfile" component={EditProfile}/>
            <Stack.Screen name="SignOut" component={SignOut}/>
        </Stack.Navigator>
    );
}

