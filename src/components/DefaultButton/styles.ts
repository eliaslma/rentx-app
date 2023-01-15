import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';
import { RectButtonProps } from 'react-native-gesture-handler';

interface ButtonProps extends RectButtonProps {
    color?: string;
}

export const Container = styled(RectButton)<ButtonProps>`
    background-color: ${({ color, theme }) => color ? color : theme.colors.main };
    justify-content: center;
    align-items: center;
    padding: 19px;
    width: 100%;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_medium};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.background_secondary};
`;