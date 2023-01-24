import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import MenuCar from '../../assets/menu_car.svg'

import {
    Container
} from './styles';

interface ButtonProps extends RectButtonProps{

}

export function SchedulesButton({...rest} : ButtonProps){
    return(
        <Container {...rest}>
            <MenuCar/>
        </Container>
    );
}