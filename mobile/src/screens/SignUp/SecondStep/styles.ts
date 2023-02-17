import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface IndexProps {
    active: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
`;

export const BackButtonWrapper = styled.View`
    flex-direction: row;
    padding: 30px 24px 0px;
    justify-content: space-between;
    align-items: center;
`;

export const StepIndexes = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const StepIndex = styled.View<IndexProps>`
    width: 6px;
    height: 6px;
    background-color: ${({ theme, active}) => 
        active ? theme.colors.text : theme.colors.shape
    };
    margin-right: 8px;
    border-radius: 3px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 0px 24px;
    justify-content: center;
`;

export const StepTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(20)}px;
    line-height: 22px;
`;

export const Form = styled.View`
    width: 100%;
    margin-top: 24px;
    margin-bottom: 32px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.archivo_semibold};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(40)}px;
    line-height: 44px;
    margin-top: ${RFValue(80)}px;
    padding: 0px 24px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    line-height: 25px;
    margin-top: ${RFValue(24)}px;
    padding: 0px 24px;

`;