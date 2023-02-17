import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 32px;
    padding: 14px;
`;