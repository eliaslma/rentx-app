import React, { useState } from 'react';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";

import Email from '../../assets/email.svg';
import Password from '../../assets/password.svg';
import { DefaultButton } from '@myapp/components/DefaultButton';
import { InputForm } from '@myapp/components/InputForm';
import { BackButton } from '@myapp/components/BackButton';
import {
    Container,
    Header,
    BackButtonWrapper,
    Content,
    Form,
    RememberPass,
    CheckRemember,
    CheckBoxWrapper,
    CheckBox,
    RemindMe,
    ForgotPass,
    Title,
    Subtitle,
} from './styles';

const schema = Yup.object().shape({
    email: Yup.string().required().email(),
    password: Yup.string().required()
});

interface FormData {
    email: string;
    password: string;
}

export function SignIn() {

    const [showTitle, setShowTitle] = useState(true)
    const [isLoading, setLoading] = useState<boolean>()
    const [checkBoxSelected, setCheckBoxSelected] = useState<boolean>()
    const theme = useTheme()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleShowTitle(state: boolean) {
        if (state !== showTitle) {
            setShowTitle(state)
        }
    }

    function handleCheckBox() {
        setCheckBoxSelected(!checkBoxSelected)
    }

    function handleSignIn(data: FormData) {
        console.log(data)
        setLoading(true)
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <StatusBar translucent={false} backgroundColor={theme.colors.background_secondary} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                        <BackButtonWrapper>
                            <BackButton onPress={() => { }} />
                        </BackButtonWrapper>
                        {showTitle &&
                            <Title>
                                Estamos {'\n'}
                                quase lá.
                            </Title>
                        }
                        <Subtitle>
                            Faça seu login para começar {'\n'}
                            uma experiência incrível.
                        </Subtitle>
                    </Header>
                    <Content>
                        <Form>
                            <InputForm control={control}
                                name='email'
                                placeholder='E-mail'
                                keyboardType={'email-address'}
                                icon={Email}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.email}
                            />
                            <InputForm control={control}
                                name='password'
                                placeholder='Senha'
                                icon={Password}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.password}
                                isPassword
                            />
                        </Form>
                        <RememberPass>
                            <CheckRemember>
                                <CheckBoxWrapper isSelected={checkBoxSelected}>
                                    <CheckBox onPress={handleCheckBox} isSelected={checkBoxSelected} />
                                </CheckBoxWrapper>
                                <RemindMe>Lembrar-me</RemindMe>
                            </CheckRemember>
                            <ForgotPass>Esqueci minha senha</ForgotPass>
                        </RememberPass>
                        <DefaultButton title="Login" loading={isLoading} onPress={handleSubmit(handleSignIn)} enabled={!isLoading} />
                    </Content>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    );
}