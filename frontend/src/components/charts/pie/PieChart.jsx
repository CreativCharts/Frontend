import { PieChart } from '@mui/x-charts/PieChart';
import { transformRowsToPieChartData } from './settings/transformer.js';
import { useData } from "../../context/dataContext/UseData.jsx";

export default function PieChartComponent({margins, height, width}) {
    const { chartData } = useData();
    // const transformedData = transformRowsToPieChartData(chartData);
        const transformedData = transformRowsToPieChartData(chartData, width, height);
    console.log('HEIGHT', height);
    return (
        <PieChart
            {...transformedData}
            margins={margins}
            height={height}
            width={width}
        />
    );
}

