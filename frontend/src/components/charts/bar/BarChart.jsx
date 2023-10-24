import {BarChart} from '@mui/x-charts/BarChart';
import dataset from "./dataset.js";
import chartSetting from "./chartSetting.js";
import ContextProvider from "../ContextProvider.jsx";

/* Wie kann ich die daten vom Table direkt im chart angezeigt bekommen?*/
const data = ContextProvider();
console.log(data);



export default function BarsDataset() {
    return (
        <BarChart

            dataset={dataset}
            {...chartSetting}
        />
    );
}
