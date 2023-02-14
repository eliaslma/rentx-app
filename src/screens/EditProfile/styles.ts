import styled, {css} from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
import { GestureHandlerRootView, RectButton } from 'react-native-gesture-handler';

interface Props {
    isSelected: boolean;
}

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
    justify-content: center;
    padding: 0px 24px;
`;

export const BackButton = styled.TouchableOpacity`
    width: 100%;
    position: absolute;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.background_secondary};
    font-size: ${RFValue(25)}px;
`;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(24)}px;
`;

export const UserInfo = styled.View`
    width: 100%;
    align-items: center;
    margin-top: ${RFValue(200) - 110}px;
    padding: 0px 24px;
`;

export const Photo = styled.Image`
    width: ${RFValue(180)}px;
    height: ${RFValue(180)}px;
    border-radius: ${RFValue(90)}px;
`;

export const AddPhotoButton = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.main};
    margin: 4px;
    padding: 8px;
    position: absolute;
    align-self: flex-end;
    bottom: 0;
`;

export const PhotoWrapper = styled.View``;

export const Menu = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 32px;
    border-bottom-width: ${RFValue(1)}px;
    border-color: ${({ theme }) => theme.colors.line};
`;

export const ChangeData = styled.TouchableOpacity<Props>`
    margin-right: 24px;
    padding-bottom: 14px;

    ${({isSelected })=> isSelected && css`
        border-bottom-width: ${RFValue(2)}px;
        border-color: ${({ theme }) => theme.colors.main};
    `};
    
`;

export const OptionTitle = styled.Text<Props>`
    font-family: ${({ theme, isSelected }) => isSelected ? theme.fonts.archivo_semibold : theme.fonts.archivo_regular};
    color: ${({ theme, isSelected }) => isSelected ? theme.colors.title_profile : theme.colors.text_detail};
    font-size: ${RFValue(20)}px;
`;

export const ChangePassword = styled.TouchableOpacity<Props>`
    padding-bottom: 14px;
    ${({isSelected })=> isSelected && css`
        border-bottom-width: ${RFValue(2)}px;
        border-color: ${({ theme }) => theme.colors.main};
    `};
`;

export const UserData = styled.View`
    flex: 1;
    padding: 24px;
`;

