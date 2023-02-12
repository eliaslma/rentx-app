import React from 'react';
import Exit from '../../assets/exit.svg'
import { useAuth } from '@myapp/hooks/auth';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import IconX from '../../assets/logo_background_gray.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';

import {
    Container,
    Header,
    Content,
    Title,
    Message,
    ConfirmButton,
    DenyButton,
    ButtonTitle,
    Footer,
    ButtonsWrapper,
} from './styles';



export function SignOut({navigation}) {

    const theme = useTheme();
    const { signOut } = useAuth();

    function handleConfirmSignOut(){
        signOut()
    }

    return (
        <Container>
            <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() }}>
                <IconX height={RFValue(235)} width={'100%'} />
            </Header>
            <Content>
                <Exit height={RFValue(80)} width={RFValue(80)} />
                <Title>Sair do RENTX</Title>
                <Message>
                    Tem certeza que quer {'\n'}
                    fazer isso?
                </Message>
            </Content>
            <Footer>
                <ButtonsWrapper>
                    <DenyButton onPress={() => navigation.navigate('Profile')}>
                        <ButtonTitle>Não</ButtonTitle>
                    </DenyButton>
                    <ConfirmButton onPress={handleConfirmSignOut}>
                        <ButtonTitle>Sim</ButtonTitle>
                    </ConfirmButton>
                </ButtonsWrapper>
            </Footer>
        </Container>
    );
}