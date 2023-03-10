import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

interface ImageIndexProps {
    active: boolean;
}

export const Container = styled.View`
    width: 100%;
    align-items: center;
`;

export const CarImageWrapper = styled.View`
  width: ${Dimensions.get('window').width}px;
  height: ${RFValue(132)}px;
  justify-content: center;
  align-items: center;
`;

export const CarImage = styled.Image`
    width: ${RFValue(280)}px;
    height: ${RFValue(132)}px;
`;

export const ImageIndexes = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const ImageIndex = styled.View<ImageIndexProps>`
    width: 6px;
    height: 6px;
    background-color: ${({ theme, active}) => 
        active ? theme.colors.text : theme.colors.shape
    };
    margin-right: 8px;
    border-radius: 3px;
`;
