import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: center;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 30px 24px;
`;

export const TotalCars = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
`;

export const LoadContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

