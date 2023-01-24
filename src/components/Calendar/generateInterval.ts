import { eachDayOfInterval, format } from 'date-fns';
import { DateData } from 'react-native-calendars';
import { getPlatformDate } from '@myapp/utils/getPlatformDate';
import { MarkedDateProps } from '.';
import theme from '@myapp/global/styles/theme';

export function generateInterval(start: DateData, end: DateData){
    let interval: MarkedDateProps = {}

    eachDayOfInterval({ start: new Date(start.timestamp), end: new Date(end.timestamp)})
    .forEach(( item ) => {
        const date = format(getPlatformDate(item), 'yyyy-MM-dd')

        interval = {
            ...interval,
            [date]: {
                color: start.dateString === date || end.dateString === date ? 
                theme.colors.main : theme.colors.main_light,
                textColor: start.dateString === date || end.dateString === date ? theme.colors.background_secondary : theme.colors.main,
            }
        }

    });

    return interval
    

}