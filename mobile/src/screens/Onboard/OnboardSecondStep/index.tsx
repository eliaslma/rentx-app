import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { getBottomSpace, getStatusBarHeight, isIphoneX } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { StepIndex } from '@myapp/screens/SignUp/FirstStep/styles';
import NumberTwo from '../../../assets/numbertwo.svg'
import Calendar from '../../../assets/calendar.svg'
import {
    Container,
    Header,
    StepWrapper,
    Title,
    Subtitle,
    StepSliderWrapper,
    Steps,
    NextStepButton,
    Icon,
    Footer
} from './styles';

export function OnboardSecondStep({ navigation }) {

    const theme = useTheme();

    return (
        <Container>
            <StatusBar translucent={false} style={"dark"} backgroundColor={theme.colors.background_primary} />
            <Header style={isIphoneX() && { paddingTop: getStatusBarHeight() + RFValue(130) }}>
                <StepWrapper>
                    <Calendar width={RFValue(80)} height={RFValue(80)} fill={theme.colors.main} />
                    <NumberTwo width={RFValue(64)} height={RFValue(42)} />
                </StepWrapper>
            </Header>
            <Title>
                Depois, {'\n'}
                escolha a {'\n'}
                data
            </Title>
            <Subtitle>
                Você é quem define um {'\n'}
                período, e nós confirmaremos {'\n'}
                seu agendamento.
            </Subtitle>
            <Footer style={isIphoneX() && { paddingBottom: getBottomSpace() }}>
                <StepSliderWrapper>
                    <Steps>
                        <StepIndex active={false} />
                        <StepIndex active={true} />
                    </Steps>
                    <NextStepButton onPress={() => navigation.navigate('OnboardMain')}>
                        <Icon name="keyboard-arrow-right" color={theme.colors.text_detail} />
                    </NextStepButton>
                </StepSliderWrapper>
            </Footer>
        </Container>
    );
}