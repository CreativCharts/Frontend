/*
import {useData} from "../DataContext";
import {PieChart} from '@mui/x-charts/PieChart';
/!*
import {transformDashPie} from './settings/pieTransformer';
import {dashPieChartSetting} from "./settings/chartSetting.js";
*!/

export default function DashPieChart() {
    const {chartData} = useData();

    if (!chartData) return <div>Loading...</div>;

    const transformedData =
        transformDashPie(chartData);

    return (
        <PieChart
            {...dashPieChartSetting}
            {...transformedData}
        />
    );
}
*/
