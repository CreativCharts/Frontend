import {LineChart} from '@mui/x-charts/LineChart';
import chartSetting from './chartSetting.js';
import dataset from './dataset.js';

export default function DashedLineChart() {
    return (
        <LineChart
            dataset={dataset}
            {...chartSetting}

        />
    );
}
