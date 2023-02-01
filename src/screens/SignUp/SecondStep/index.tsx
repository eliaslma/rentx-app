import React, { useState } from 'react';
import { isIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Alert, KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useRoute } from '@react-navigation/native';

import Password from '../../../assets/password.svg'
import { DefaultButton } from '@myapp/components/DefaultButton';
import { InputForm } from '@myapp/components/InputForm';
import { BackButton } from '@myapp/components/BackButton';
import {
    Container,
    Header,
    BackButtonWrapper,
    StepIndexes,
    StepIndex,
    Content,
    StepTitle,
    Form,
    Title,
    Subtitle,
} from './styles';

const schema = Yup.object().shape({
    password: Yup.string().required(),
    confirmationPassword: Yup.string().required(),
});

interface FormData {
    password: string;
    confirmationPassword: string;
}

interface Params {
    user: {
        name: string,
        email: string
    }
}

export function SecondStep() {

    const theme = useTheme()
    const [showTitle, setShowTitle] = useState(true)
    const [isLoading, setLoading] = useState<boolean>()

    //const route = useRoute();
    //const { user } = route.params as Params

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleShowTitle(state: boolean) {
        if (state !== showTitle) {
            setShowTitle(state)
        }
    }

    function handleRegister(data: FormData) {
        if (data.password != data.confirmationPassword) {
            return Alert.alert('', 'As senhas não conferem.')
        }
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
                            <StepIndexes>
                                <StepIndex active={false} />
                                <StepIndex active={true} />
                            </StepIndexes>
                        </BackButtonWrapper>
                        {showTitle &&
                            <Title>
                                Crie sua {'\n'}
                                Conta
                            </Title>
                        }
                        <Subtitle>
                            Faça seu cadastro de {'\n'}
                            forma rápida e fácil.
                        </Subtitle>
                    </Header>
                    <Content>
                        <StepTitle>02. Senha</StepTitle>
                        <Form>
                            <InputForm control={control}
                                name='password'
                                placeholder='Senha'
                                icon={Password}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.password}
                                isPassword
                            />
                            <InputForm control={control}
                                name='confirmationPassword'
                                placeholder='Repetir senha'
                                icon={Password}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.confirmationPassword}
                                isPassword
                            />
                        </Form>
                        <DefaultButton title="Próximo" loading={isLoading} onPress={handleSubmit(handleRegister)} enabled={!isLoading} />
                    </Content>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    );
}