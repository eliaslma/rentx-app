import React, { useState } from 'react';
import { SvgProps } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { ShowPassButton } from '../ShowPassButton';

import {
    Container,
    IconWrapper,
    InputWrapper,
    Input,
} from './styles';

interface InputFormProps {
    icon: React.FC<SvgProps>;
    isPassword?: boolean;
    placeholder: string;
    onFocus: Function;
}

export function InputForm({ icon: Icon, placeholder, onFocus, isPassword }: InputFormProps) {

    const [hidePassword, setHidePassword] = useState(isPassword)

    function handleShowPass() {
        setHidePassword(!hidePassword)
    }

    return (
        <Container>
            <IconWrapper>
                <Icon width={RFValue(24)} height={RFValue(24)} />
            </IconWrapper>
            <InputWrapper>
                <Input
                    onFocus={() => onFocus(false)}
                    secureTextEntry={hidePassword}
                    placeholder={placeholder}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                {isPassword &&
                    <ShowPassButton onPress={handleShowPass} isActive={!hidePassword} />
                }
            </InputWrapper>
        </Container>
    );
}