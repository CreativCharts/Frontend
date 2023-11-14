import {useData} from '../DataContext.jsx';
import {LineChart} from '@mui/x-charts/LineChart';
import {transformRowsToLineChartData} from './settings/lineTransformer.js';
import {chartSetting} from "./settings/chartSetting.js";

export default function LineChartComponent() {
    const {chartData} = useData();

    const transformedData =
        transformRowsToLineChartData(chartData);

    return (
        <LineChart
            {...chartSetting}
            {...transformedData}
        />
    );
}
