import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    margin-top: 8px;
`;

export const IconWrapper = styled.View`
    background-color: ${({ theme }) => theme.colors.shape_light};
    padding: 16px;
    margin-right: 2px;
`;

export const InputWrapper = styled.View`    
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 16px;
    background-color: ${({ theme }) => theme.colors.shape_light};
`;

export const Input = styled(TextInput)`
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.inter_regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(15)}px;
    padding: 16px 0px;
`;

