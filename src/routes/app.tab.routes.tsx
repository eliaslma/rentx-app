import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import Home from '../assets/home.svg'
import Car from '../assets/car.svg'
import Perfil from '../assets/perfil.svg'
import { RFValue } from 'react-native-responsive-fontsize';

//Screens
import { Schedules } from '@myapp/screens/Schedules';
import { Profile } from '@myapp/screens/Profile';

//Routes
import { HomeRoutes } from './app.stack.routes';
import { ProfileRoutes } from './app.stack.routes';

export function AppTabRoutes(){

    const theme = useTheme()
    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarActiveTintColor: theme.colors.main}}>
            <Tab.Screen name="HomeRoutes" component={HomeRoutes} 
            options={{
                tabBarIcon: ({color}) =>  
                    <Home fill={color} width={RFValue(24)} height={RFValue(24)}/>
            }}/>
            <Tab.Screen name="Schedules" component={Schedules}
            options={{
                tabBarIcon: ({color}) =>  
                    <Car fill={color} width={RFValue(24)} height={RFValue(24)}/>
            }}/>
            
            <Tab.Screen name="ProfileRoutes" component={ProfileRoutes}
            options={{
                tabBarIcon: ({color}) =>  
                    <Perfil fill={color} width={RFValue(24)} height={RFValue(24)}/>
            }}/>
        </Tab.Navigator>
    );

}