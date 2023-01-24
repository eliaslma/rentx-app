import React from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButtonProps } from 'react-native-gesture-handler';

import { CarDTO } from '@myapp/dtos/CarDTO';
import { SvgProps } from 'react-native-svg';
import {
    Container,
    CarInfo,
    Detail,
    Model,
    About,
    Brand,
    Name,
    Rent,
    Type,
    CarImage,
    Period,
    Price,
} from './styles';

export interface CardProps extends RectButtonProps  {
    data: CarDTO
    icon: React.FC<SvgProps>
}

export function CardCar({data, icon: Icon, ...rest} : CardProps){

    const theme = useTheme();

    return (
        <Container {...rest}>
            <CarInfo>
                <Detail>
                    <Model>
                        <Brand>{data.brand}</Brand>
                        <Name>{data.name}</Name>
                    </Model>
                    <About>
                        <Rent>
                            <Period>{data.rent.period}</Period>
                            <Price>R$ {data.rent.price}</Price>
                        </Rent>
                        <Type>
                            <Icon fill={theme.colors.text_detail} width={RFValue(20)} height={RFValue(20)}/>
                        </Type>
                    </About>
                </Detail>
                <CarImage source={{uri: data.thumbnail}} resizeMode="contain"/>
            </CarInfo>
        </Container>
   );
}