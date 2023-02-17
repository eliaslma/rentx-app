import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    padding: 30px 24px 0px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        padding: 24
    }
})`
    flex: 1;
`;

export const Description = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
export const Model = styled.View``;

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;
`;
export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-top: 4px;

`;
export const Rent = styled.View``;

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text_detail};
    text-transform: uppercase;

`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    font-size: ${RFValue(25)}px;
    color: ${({ theme }) => theme.colors.main};

`;
export const ModelSpec = styled.View`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
`;

export const AboutCar = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    text-align: justify;
    margin-top: 24px;
    line-height: ${RFValue(25)}px;
`;

export const Details = styled.View`
    margin-top: 40px;
    padding: 0px 8px;
`;

export const Icon = styled.View`
    background-color: ${({theme}) => theme.colors.main};
    padding: 14px;

`;

export const DateInfo = styled.View`

`;

export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme}) => theme.colors.text_detail};
    margin-bottom: 8px;
`;

export const DateValue = styled.Text`
    color: ${({ theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.inter_medium};
    font-size: ${RFValue(15)}px;
`;

export const TotalPeriod = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    border-bottom-width: 1px;    
    padding-bottom: 16px;
`;

export const Daily = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin-top: 16px;
`;

export const TotalDaily = styled.View``;

export const PriceTitle = styled.Text`
    color: ${({ theme}) => theme.colors.text_detail};
    font-family: ${({theme}) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
`;

export const PriceInfo = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`;

export const DailyPrice = styled.Text`

    color: ${({ theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.inter_medium};
    font-size: ${RFValue(15)}px;
    align-items: center;

`;

export const Days = styled.Text`
    color: ${({ theme}) => theme.colors.title};
    font-family: ${({theme}) => theme.fonts.inter_medium};
    font-size: ${RFValue(15)}px;
    align-items: center;
`;

export const TotalPrice = styled.Text`
    color: ${({ theme}) => theme.colors.success};
    font-family: ${({theme}) => theme.fonts.archivo_medium};
    font-size: ${RFValue(24)}px;
`;

export const Footer = styled.View`
    background-color: ${({theme }) => theme.colors.background_primary};
    width: 100%;
    padding: 24px;
`;

