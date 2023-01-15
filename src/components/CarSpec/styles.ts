import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    padding: 16px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.colors.background_primary};
    width: ${RFValue(109)}px;
    width: ${RFValue(92)}px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_medium};
    font-size: ${RFValue(13)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 14px;
`;