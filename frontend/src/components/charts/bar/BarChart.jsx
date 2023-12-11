import {BarChart} from '@mui/x-charts/BarChart';
import {transformRowsToBarChartData} from './settings/transformer.js';
import {useData} from "../../context/dataContext/UseData.jsx";

export default function BarChartComponent() {

    const {chartData} = useData();
    const transformedData = transformRowsToBarChartData(chartData);
    const margin = {
        left: 100,
        bottom: 30
    }

    return (
        <BarChart
            {...transformedData}
            {...margin}
        />
    );
}
