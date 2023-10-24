import {axisClasses} from "@mui/x-charts";

let valueFormatter = (value) => `${value}°C`;
const chartSetting = {
    width: 1500,
    height: 520,

    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    xAxis: [{scaleType: 'band', dataKey: 'month'}],
    series: [
        {dataKey: 'london', label: 'London', valueFormatter},
        {dataKey: 'paris', label: 'Paris', valueFormatter},
        {dataKey: 'newYork', label: 'New York', valueFormatter},
        {dataKey: 'seoul', label: 'Seoul', valueFormatter},
    ],
    sx: {
        [`& .${axisClasses.axisLabel}`]: {
            fontSize: 12,
            fontWeight: 700,
            fill: '#000',
        },
    }
}

/* Wie kann ich die daten vom Table direkt im chart angezeigt bekommen?*/

export default chartSetting;
