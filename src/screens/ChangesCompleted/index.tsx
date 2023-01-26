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

export function ChangesCompleted(){

    const theme = useTheme();

    return(
        <Container>
            <StatusBar style='light' translucent={false} backgroundColor={theme.colors.header}/>
            <Header style={ isIphoneX() && {paddingTop: getStatusBarHeight()}}>
                <IconX height={RFValue(235)} width={'100%'}/>
            </Header>
            <Content>
                <Done height={RFValue(80)} width={RFValue(80)}/>
                <Title>Feito!</Title>
                <Message>
                    Agora suas infomações {'\n'}
                    estão atualizadas.
                </Message>
            </Content>
            <Footer>
                <ConfirmButton onPress={() => {}}>
                    <ButtonTitle>Ok</ButtonTitle>
                </ConfirmButton>
            </Footer>
        </Container>
    );
    
}