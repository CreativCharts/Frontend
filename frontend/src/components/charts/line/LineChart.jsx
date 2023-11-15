import {LineChart} from '@mui/x-charts/LineChart';
import {transformRowsToLineChartData} from './settings/transformer.js';
import {useData} from "../../../context/UseData.jsx";

export default function LineChartComponent() {
    const {chartData} = useData();

    const transformedData =
        transformRowsToLineChartData(chartData);

    return (
        <LineChart
            {...transformedData}
        />
    );
}
