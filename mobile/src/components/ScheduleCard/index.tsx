import React from 'react';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';


import { format, parseISO } from 'date-fns';



import { PeriodCard } from '../PeriodCard';
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

export interface CardProps {
    data: CarDTO;
    icon: React.FC<SvgProps>;
    startDate: string;
    endDate: string;
}

export function ScheduleCard({data, icon: Icon, startDate, endDate, ...rest} : CardProps){
    
    const theme = useTheme()
    const startDateFormatted = format(parseISO(startDate),'dd/MM/yyyy')
    const endDateFormatted = format(parseISO(endDate),'dd/MM/yyyy')

    return (
        <>
            <Container {...rest}>
                <CarInfo>
                    <Detail>
                        <Model>
                            <Brand>{data.brand}</Brand>
                            <Name>{data.name}</Name>
                        </Model>
                        <About>
                            <Rent>
                                <Period>{data.period}</Period>
                                <Price>R$ {data.price}</Price>
                            </Rent>
                            <Type>
                                <Icon fill={theme.colors.text_detail} width={RFValue(20)} height={RFValue(20)}/>
                            </Type>
                        </About>
                    </Detail>
                    <CarImage source={{uri: data.thumbnail}} resizeMode="contain"/>
                </CarInfo>
            </Container>
            <PeriodCard startDate={startDateFormatted} endDate={endDateFormatted}/>
        </>

   );
}