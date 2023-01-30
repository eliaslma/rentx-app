import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';


interface CheckBoxProps {
    isSelected: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
`;

export const BackButtonWrapper = styled.View`
    flex-direction: row;
    padding: 30px 24px 0px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 0px 24px;
    justify-content: center;
`;

export const Form = styled.View`
    width: 100%;
`;

export const RememberPass = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 32px 0px;
`;

export const CheckRemember = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const CheckBoxWrapper = styled.View<CheckBoxProps>`

    ${({ isSelected }) => (
        isSelected && css`
            border-width: ${RFValue(4)}px;
            border-color: 'black';
        `
    )};
    
`;

export const CheckBox = styled(RectButton) <CheckBoxProps>`

    background-color: ${({ theme }) => theme.colors.line};
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;

    ${({ isSelected }) => (
        isSelected && css`
            background-color: ${({ theme }) => theme.colors.background_secondary};
            width: ${RFValue(12)}px;
            height: ${RFValue(12)}px;
        `
    )};
`;

export const RemindMe = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text_support};
    font-size: ${RFValue(13)}px;
    margin-left: 14px;
`;

export const ForgotPass = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text_support};
    font-size: ${RFValue(13)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(40)}px;
    line-height: 44px;
    margin-top: ${RFValue(80)}px;
    padding: 0px 24px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    line-height: 25px;
    margin-top: ${RFValue(24)}px;
    padding: 0px 24px;

`;