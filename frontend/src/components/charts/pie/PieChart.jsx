import { PieChart } from '@mui/x-charts/PieChart';
import { transformRowsToPieChartData } from './settings/transformer.js';
import { useData } from "../../context/dataContext/UseData.jsx";


export default function PieChartComponent({ width, height, margin }) {
    const { chartData } = useData();
    const transformedData = transformRowsToPieChartData(chartData, width, height);

    return (
        <PieChart
            width={width}
            height={height}
            {...transformedData}
            margin={margin}

        />
    );
}

