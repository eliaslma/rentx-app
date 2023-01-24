import React from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    color?: string;
    title: string;
    onPress?: () => void;
}

export function DefaultButton({ color, title, ...rest } : ButtonProps){
    return(
        <Container color={color} {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}