import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { ptBR } from './localeConfig';

LocaleConfig.locales['pt-BR'] = ptBR
LocaleConfig.defaultLocale = 'pt-BR';

export interface MarkedDateProps{
    [date:  string] : {
        color: string;
        textColor: string;
        disabled?: boolean;
        disableTouchEvent?: boolean;
    } 
}

interface CalendarProps {
    markedDates: MarkedDateProps;
    onDayPress: Function;

}

export function Calendar({ onDayPress, markedDates } : CalendarProps){

    const theme = useTheme()
        
    return(
        <CustomCalendar
            style={{marginBottom: 16}}
            renderArrow={( direction) => 
                <Feather 
                    size={24}
                    color={theme.colors.text}
                    name={direction == 'left' ? 'chevron-left' : 'chevron-right' }
                />
            }
            headerStyle={{ borderBottomWidth: 1, borderBottomColor: theme.colors.line, paddingBottom: 10, marginBottom: 10}}
            theme={{
                textMonthFontFamily: theme.fonts.archivo_semibold,
                textMonthFontSize: 20,
                textDayHeaderFontFamily: theme.fonts.archivo_semibold,
                textDayHeaderFontSize: 10,
                textDayFontFamily: theme.fonts.inter_regular,
                textDayFontSize: 15,
                selectedDayBackgroundColor: 'red',
            }}
            firstDay={1}
            minDate={new Date().toDateString()}
            markingType={'period'}
            onDayPress={day => {
                onDayPress(day)
            }}
            markedDates={markedDates}
        />
    );
}