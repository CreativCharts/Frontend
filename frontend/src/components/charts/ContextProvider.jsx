import React from "react";
import * as ReactGridTable from '../tables/ReactGridTable';
import * as BarChart from '../charts/bar/BarChart';
import * as LineChart from '../charts/line/LineChart';
import * as ExcelReader from '../excel/ExcelReader';
/* Wie kann ich die daten vom Table direkt im chart angezeigt bekommen?*/

export default function ContextProvider() {
    return (
        <React.Fragment>
            <ReactGridTable/>
            <BarChart/>
            <LineChart/>
            <ExcelReader/>
        </React.Fragment>
    );
}
