import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import Eye from '../../assets/eye.svg'
import EyeActive from '../../assets/eye_active.svg'

import {
    Container
} from './styles';

interface Props {
    onPress: () => void;
    isActive: boolean;
}

export function ShowPassButton({ onPress, isActive }: Props) {
    return (
        <Container onPress={onPress}>
            {isActive
                ? <EyeActive width={RFValue(24)} height={RFValue(24)} />
                : <Eye width={RFValue(24)} height={RFValue(24)} />
            }
        </Container>
    );
}