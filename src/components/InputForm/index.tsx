import React, { useState } from 'react';
import { SvgProps } from 'react-native-svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { ShowPassButton } from '../ShowPassButton';
import { KeyboardTypeOptions } from 'react-native';
import { Control, Controller, FieldValues } from 'react-hook-form';
import { useTheme } from 'styled-components';

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
    keyboardType?: KeyboardTypeOptions;
    onFocus: Function;
    onBlur: Function;
    control: Control;
    name: string;
    error: FieldValues;
}

export function InputForm({
    icon: Icon,
    placeholder,
    onFocus,
    onBlur,
    isPassword,
    keyboardType,
    name,
    control,
    error
}: InputFormProps) {

    const theme = useTheme()
    const [hidePassword, setHidePassword] = useState(isPassword)

    function handleShowPass() {
        setHidePassword(!hidePassword)
    }

    return (
        <Container>
            <IconWrapper>
                <Icon width={RFValue(24)} height={RFValue(24)} />
            </IconWrapper>
            <InputWrapper style={error && { borderBottomWidth: 2, borderBottomColor: theme.colors.main }}>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            onChangeText={onChange}
                            onFocus={() => onFocus(false)}
                            secureTextEntry={hidePassword}
                            placeholder={placeholder}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType={keyboardType}
                            onBlur={() => onBlur(true)}
                            value={value}
                        />)}
                    name={name}
                />
                {isPassword &&
                    <ShowPassButton onPress={handleShowPass} isActive={!hidePassword} />
                }
            </InputWrapper>
        </Container>
    );
}