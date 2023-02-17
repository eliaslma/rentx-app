import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.header};
    width: 100%;
    height: ${RFValue(200)}px;
    padding-top: 30px;
    position: absolute;
`;

export const ProfileOptions = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
`;

export const IconWrapper = styled.TouchableOpacity`
    padding: 12px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(24)}px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(25)}px;
`;

export const UserInfo = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${RFValue(110)}px;
    margin-bottom: ${RFValue(44)}px;
`;

export const Photo = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;
    border-radius: ${RFValue(90)}px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.title_profile};
    font-size: ${RFValue(30)}px;
    margin-top: 24px;
    text-align: center;
    padding: 0 ${RFValue(90)}px;
`;

export const Schedules = styled.View`
    margin: 0px 24px 27px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 19px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.colors.line};
`;

export const SchedulesDone = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
`;

export const Totalschedules = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;

export const Favorite = styled.View`
    margin: 0px 24px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const CardWrapper = styled.View`
    padding: 16px;
`;

export const FavoriteCar = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
`;

export const SchedulingFrequency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_medium};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;

`;
