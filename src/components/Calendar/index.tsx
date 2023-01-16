import React from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['pt-BR'] = {
    monthNames: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
};

LocaleConfig.defaultLocale = 'pt-BR';

export function Calendar(){

    const theme = useTheme()

    return(
        <CustomCalendar
            style={{marginBottom: 16}}
            renderArrow={( direction) => 
                <Feather 
                    size={RFValue(24)}
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
            }}
            firstDay={1}
            minDate={String(new Date())}
        />
    );
}