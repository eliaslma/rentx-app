import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.header};
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    align-items: center;
    padding-top: 32px;
`;

export const Content = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(30)}px;
    margin-top: 40px;
`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(15)}px;
    text-align: center;
    margin-top: 16px;
    line-height: ${RFValue(25)}px;
`;

export const ConfirmButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.shape_dark};
    padding: 19px 25px;
    width: 48%;
    align-items: center;
`;

export const DenyButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.main};
    padding: 19px 25px;
    width: 48%;
    align-items: center;
`;

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_medium};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
`;

export const ButtonsWrapper = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 0px 24px;
`;

export const Footer = styled.View`
    width: 100%;
    align-items: center;
    padding: 80px 0px;
`;


