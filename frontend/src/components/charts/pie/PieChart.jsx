import {PieChart} from '@mui/x-charts/PieChart';
import {transformRowsToPieChartData} from './settings/transformer.js';
import {useData} from "../../../context/UseData.jsx";

export default function PieChartComponent({ width, height }) {

    const {chartData} = useData();
    const transformedData =
        transformRowsToPieChartData(chartData, width, height);

    return (
        <PieChart
            {...transformedData}
        />
    );
}
