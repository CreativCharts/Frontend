import * as React from 'react';
import {useData} from '../DataContext.jsx';
import {LineChart} from '@mui/x-charts/LineChart';
import {chartSetting, transformRowsToLineChartData} from './chartSetting';


export default function LineChartComponent() {

    const {chartData} = useData();
    const transformedData = transformRowsToLineChartData(chartData);
    return (
        <LineChart
            dataset={transformedData}
            series={transformedData.series}
            {...chartSetting}
        />
    );
}
