import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    padding-top:  ${RFValue(130)}px;
    padding-bottom: ${RFValue(90)}px;
`;

export const StepWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0px 32px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_bold};
    font-size: ${RFValue(40)}px;
    color: ${({ theme }) => theme.colors.title};
    margin-left: 32px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-left: 32px;
    margin-top: 24px;
`;

export const Footer = styled.View`
   flex: 1;
   justify-content: flex-end;
   padding: 32px;

`;

export const Steps = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StepSliderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const NextStepButton = styled.TouchableOpacity`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(24)}px;
`;
