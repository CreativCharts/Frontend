import {LineChart} from '@mui/x-charts/LineChart';
import {transformRowsToLineChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";

export default function LineChartComponent(margin) {
    const {chartData} = useData();

    const transformedData =
        transformRowsToLineChartData(chartData);

    return (
        <LineChart
            {...transformedData}
            margin={margin}
        />
    );
}
