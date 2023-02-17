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

import Email from '../../../assets/email.svg'
import Perfil from '../../../assets/perfil.svg';
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
    name: Yup.string().required(),
    email: Yup.string().required().email(),
});

interface FormData {
    name: string;
    email: string;
}

export function SignUpFirstStep({ navigation }) {

    const theme = useTheme()
    const [showTitle, setShowTitle] = useState(true)
    const [isLoading, setLoading] = useState<boolean>()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    function handleShowTitle(state: boolean) {
        if (state !== showTitle) {
            setShowTitle(state)
        }
    }

    function handleNextStep(userData: FormData) {
        navigation.navigate('SignUpSecondStep', {user: userData} )
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Container>
                <StatusBar translucent={false} backgroundColor={theme.colors.background_secondary} />
                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                        <BackButtonWrapper>
                            <BackButton onPress={() => navigation.goBack()} />
                            <StepIndexes>
                                <StepIndex active={true} />
                                <StepIndex active={false} />
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
                        <StepTitle>1. Dados</StepTitle>
                        <Form>
                            <InputForm control={control}
                                name='name'
                                placeholder='Nome'
                                icon={Perfil}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.name}
                            />
                            <InputForm control={control}
                                name='email'
                                placeholder='E-mail'
                                keyboardType={'email-address'}
                                icon={Email}
                                onFocus={handleShowTitle}
                                onBlur={handleShowTitle}
                                error={errors.email}
                            />
                        </Form>
                        <DefaultButton title="Próximo" loading={isLoading} onPress={handleSubmit(handleNextStep)} enabled={!isLoading} />
                    </Content>
                </KeyboardAvoidingView>
            </Container>
        </TouchableWithoutFeedback>
    );
}