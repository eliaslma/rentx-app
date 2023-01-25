import React from 'react';
import Arrow from '../../assets/small_arrow.svg'

import {
    Container,
    Title,
    PeriodWrapper,
    StartDate,
    EndDate,
} from './styles';

interface PeriodProps{
    startDate: string;
    endDate: string;
}


export function PeriodCard({startDate, endDate} : PeriodProps){
    return(
        <Container>
            <Title>Período</Title>
            <PeriodWrapper>
                <StartDate>{startDate}</StartDate>
                <Arrow/>
                <EndDate>{endDate}</EndDate>
            </PeriodWrapper>
        </Container>
    );
}