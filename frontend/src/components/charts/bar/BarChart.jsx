import { BarPlot } from '@mui/x-charts';

import { BarChart } from '@mui/x-charts/BarChart';
import { chartSettings, transformRowsToBarChartData } from './chartSetting';
import { useData } from "../DataContext.jsx";

export default function BarChartComponent() {
    const {
        width,
        height
    } = chartSettings;

    const { chartData } = useData();
    const transformedData = transformRowsToBarChartData(chartData);
    console.log("Transformed Data:", transformedData);

    return (
        <BarChart
            // width={width}
            // height={height}
            // series={transformedData.series}
            // xAxis={transformedData.xAxis}
            {...chartSettings}
            {...transformedData}
        />
    );
}
