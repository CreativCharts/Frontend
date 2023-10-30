import * as React from 'react';
import { useData } from '../DataContext.jsx';
import { LineChart } from '@mui/x-charts/LineChart';
import { chartSetting } from './settings/chartSetting';
import { transformRowsToLineChartData } from './settings/transformer';


export default function LineChartComponent() {

    const { chartData } = useData();
    const transformedData = transformRowsToLineChartData(chartData);
    return (
        <LineChart
            {...chartSetting}
            {...transformedData}
        />
    );
}
