import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 17px 24px;
    margin-bottom: 4px;
`;

export const CarInfo = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Detail = styled.View``;
export const Model = styled.View``;

export const About = styled.View`
    flex-direction: row;
`;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-top: 4px;
`;

export const Rent = styled.View`
    margin-top: 16px;
`;

export const Type = styled.View`
    justify-content: flex-end;
    margin-left: 26px;
`;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.main};
    margin-top: 4px;
`;

export const CarImage = styled.Image`
    width: ${RFValue(160)}px;
    height: ${RFValue(92)}px;
`;