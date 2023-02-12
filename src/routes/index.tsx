import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Loader } from '@myapp/components/Loader';

//routes
import { AppTabRoutes } from './app.tab.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '@myapp/hooks/auth';


export function Routes(){

    const { user, userStorageLoading } = useAuth();

    if(userStorageLoading){
        return (
            <Loader/>
        )
    }

    return(
        <NavigationContainer>
            {user ? <AppTabRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    );
}