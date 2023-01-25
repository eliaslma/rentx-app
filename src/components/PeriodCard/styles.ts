import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 11px 24px;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;


export const Title = styled.Text`

    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;

`;

export const PeriodWrapper = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const StartDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(13)}px;
    margin-right: 10px;
`;

export const EndDate = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(13)}px;
    margin-left: 10px;
`;
