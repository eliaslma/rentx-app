import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    background-color: ${({ theme }) => theme.colors.header};
    width: 100%;
    height: ${RFValue(227)}px;
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
    margin-top: ${RFValue(227) - 110}px;
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


