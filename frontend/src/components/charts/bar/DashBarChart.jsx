import {useData} from "../DataContext.jsx";
import {transformDashBar} from './settings/barTransformer';
import {BarChart} from '@mui/x-charts/BarChart';
import {dashBarChartSetting} from "./settings/chartSetting.js";

export default function DashBarChart() {
    const {chartData} = useData();

    const transformedData =
        transformDashBar(chartData);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    return (
        <BarChart
            {...dashBarChartSetting}
            {...transformedData} />
    );
}
