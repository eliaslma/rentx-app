import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import Brand from '../../../assets/brand.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import {
    Container,
    Header,
    BrandWrapper,
    Content,
    Title,
    Message,
    RegisterButton,
    LoginButton,
    ButtonTitle,
    Footer,
    ButtonsWrapper,
    BackButton,
    BackButtonTitle
} from './styles';

export function OnboardMain({ navigation }) {

    const theme = useTheme();

    return (
        <Container>
            <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                <BrandWrapper>
                    <Brand width={RFValue(80)} height={RFValue(50)} />
                </BrandWrapper>
            </Header>
            <Content>
                <Title>
                    Seja {'\n'} Bem-vindo
                </Title>
                <Message>
                    O que você deseja fazer?
                </Message>
            </Content>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() + 20 }}>
                <ButtonsWrapper>
                    <LoginButton onPress={() => navigation.navigate('SignIn')}>
                        <ButtonTitle>Login</ButtonTitle>
                    </LoginButton>
                    <RegisterButton onPress={() => navigation.navigate('SignUpFirstStep')}>
                        <ButtonTitle>Cadastro</ButtonTitle>
                    </RegisterButton>
                </ButtonsWrapper>
                <BackButton onPress={() => navigation.navigate('OnboardFirstStep')}>
                    <BackButtonTitle>Voltar</BackButtonTitle>
                </BackButton>
            </Footer>
        </Container>
    );
}