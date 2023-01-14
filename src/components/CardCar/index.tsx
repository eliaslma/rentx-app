import React from 'react';
import { useTheme } from 'styled-components';
import EnergyCar from '../../assets/energy.svg'
import { RFValue } from 'react-native-responsive-fontsize';

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

interface CardData{
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number,
    },
    thumbnail: string
}

export interface CardProps {
    data: CardData
}

export function CardCar({data} : CardProps){

    const theme = useTheme();

    return (
        <Container>
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
                            <EnergyCar width={RFValue(20)} height={RFValue(20)}/>
                        </Type>
                    </About>
                </Detail>
                <CarImage source={{uri: data.thumbnail}} resizeMode="contain"/>
            </CarInfo>
        </Container>
   );
}