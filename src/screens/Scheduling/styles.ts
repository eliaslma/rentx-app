import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps{
    selected: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme}) => theme.colors.header};
`;

export const HeaderContent = styled.View`
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 24px 0px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.archivo_semibold};
    font-size: ${RFValue(30)}px;
    color: ${({ theme}) => theme.colors.background_secondary};
    margin-top: 24px;
    margin-bottom: 32px;

`;
export const ChooseDate = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
`;

export const DateInfo = styled.View<DateValueProps>`
    ${({ selected, theme }) => !selected && css`
        border-bottom-color: ${theme.colors.text};
        border-bottom-width: 1px;    
    `}
`;

export const DateTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.archivo_medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme}) => theme.colors.text};
    margin-bottom: 9px;
`;

export const DateValue = styled.Text`
    color: ${({ theme}) => theme.colors.background_secondary};
    font-family: ${({theme}) => theme.fonts.archivo_medium};
    font-size: ${RFValue(15)}px;
    width: ${RFValue(109)}px;
    height: ${RFValue(18)}px;
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
    flex: 1;
    padding: 10px;
`;

export const Footer = styled.View`
    background-color: ${({theme }) => theme.colors.background_primary};
    padding: 24px;
    width: 100%;
`;