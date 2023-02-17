import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';


import {
    Container,
    Title
} from './styles';

interface ButtonProps extends RectButtonProps {
    color?: string;
    title: string;
    onPress?: () => void;
    loading?: boolean;
}

export function DefaultButton({ color, title, enabled = true, loading, onPress }: ButtonProps) {

    const theme = useTheme()

    return (
        <Container color={color} enabled={enabled} style={{ opacity: enabled ? 1 : .5 }} onPress={onPress}>

            {loading
                ? <ActivityIndicator color={theme.colors.background_secondary} />
                : <Title>{title}</Title>
            }
        </Container>
    );
}