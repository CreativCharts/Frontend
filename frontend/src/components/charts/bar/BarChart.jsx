import { BarChart } from '@mui/x-charts/BarChart';
import { chartSettings } from './settings/chartSetting';
import { useData } from "../DataContext.jsx";
import { transformRowsToBarChartData } from './settings/transformer.js';
export default function BarChartComponent() {

    const { chartData } = useData();
    const transformedData = transformRowsToBarChartData(chartData);

    return (
        <BarChart
            {...chartSettings}
            {...transformedData}
        />
    );
}
