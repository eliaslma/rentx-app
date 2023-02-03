import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//routes
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '@myapp/hooks/auth';


export function Routes(){

    const { user } = useAuth();

    return(
        <NavigationContainer>
            {user ? <AppTabRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}