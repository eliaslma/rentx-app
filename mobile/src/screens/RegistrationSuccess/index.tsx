import React from 'react';
import Done from '../../assets/done.svg'
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
    ButtonTitle,
    Footer
} from './styles';

export function RegistrationSuccess({navigation}){

    const theme = useTheme();

    function handleGoBack(){
        navigation.navigate('SignIn')
    }

    return(
        <Container>
            <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header}/>
            <Header style={ isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <IconX height={RFValue(235)} width={'100%'}/>
            </Header>
            <Content>
                <Done height={RFValue(80)} width={RFValue(80)}/>
                <Title>Conta criada!</Title>
                <Message>
                    Agora é só fazer login {'\n'}
                    e aproveitar.
                </Message>
            </Content>
            <Footer>
                <ConfirmButton onPress={() => setTimeout(handleGoBack,2000)}>
                    <ButtonTitle>Ok</ButtonTitle>
                </ConfirmButton>
            </Footer>
        </Container>
    );
    
}