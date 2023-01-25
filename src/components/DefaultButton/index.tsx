import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';


import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    color?: string;
    title: string;
    onPress?: () => void;
    enabled?: boolean;
    loading?: boolean;
}

export function DefaultButton({ color, title, enabled = true, loading, ...rest } : ButtonProps){

    const theme = useTheme()

    return(
        <Container color={color} enabled={enabled} {...rest} style={{opacity: enabled ? 1 : .5}}>
            
            {loading 
                ? <ActivityIndicator color={theme.colors.background_secondary}/>
                : <Title>{title}</Title>
            }
        </Container>
    );
}