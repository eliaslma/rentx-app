import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps {
    color?: string;
}

export const Container = styled(RectButton) <ButtonProps>`
    flex-direction: row;
    background-color: ${({ color, theme }) => color ? color : theme.colors.main};
    justify-content: center;
    align-items: center;
    padding: 19px;
    width: 100%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_medium};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.background_secondary};
    margin-right: 4px;
`;