import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;


export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.header};
    width: 100%;
`;

export const HeaderContent = styled.View`
    align-items: flex-start;
    flex-direction: column;
    padding: 30px 24px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(30)}px;
    margin-top: 40px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_regular};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(15)}px;
    margin-top: 18px;
    line-height: 34px;

`;

export const SchedulesList = styled.View`
    flex: 1;
`;

export const SchedulesTitle = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px;
    width: 100%;
`;

export const SchedulesCompleted = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
`;

export const Quantity = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;

`;




