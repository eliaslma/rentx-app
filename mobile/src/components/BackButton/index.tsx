import React from 'react';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Icon
} from './styles';

interface Props extends BorderlessButtonProps{
    color?: string;
}

export function BackButton({color, ...rest}: Props){

    const theme = useTheme()

    return(
        <Container {...rest}>
            <Icon name="keyboard-arrow-left" color={color ? color : theme.colors.text}/>
        </Container>
    );
}