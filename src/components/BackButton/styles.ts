import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled(BorderlessButton)``;

export const Icon = styled(MaterialIcons)`
    font-size: ${RFValue(24)}px;
`;

