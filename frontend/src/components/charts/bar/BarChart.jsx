import {BarChart} from '@mui/x-charts/BarChart';
import {transformRowsToBarChartData} from './settings/transformer.js';
import {useData} from "../../../context/UseData.jsx";


export default function BarChartComponent() {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);

    return (
        <BarChart
            {...transformedData}
        />
    );
}
