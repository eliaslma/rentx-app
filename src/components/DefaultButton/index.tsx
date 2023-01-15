import React from 'react';

import {
    Container,
    Title
} from './styles';

interface ButtonProps {
    color?: string;
    title: string;
}

export function DefaultButton({ color, title } : ButtonProps){
    return(
        <Container color={color}>
            <Title>{title}</Title>
        </Container>
    );
}