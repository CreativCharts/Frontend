import {useState} from "react";
import BarChart from "./BarChart";




function ChartSelector({data}) {
    const [chartType, setChartType] = useState("");

    const handleChartTypeChange = (event) => {
        setChartType(event.target.value);
    };

    let chart;
    if (chartType === "bar") {
        chart = <BarChart data={data}/>;
    }/* else if (chartType === "line") {
        chart = <LineChart data={data}/>;
    } else if (chartType === "pie") {
        chart = <PieChart data={data}/>;
    }*/

    return (
        <div>
            <label htmlFor="chart-type">Chart Typ:</label>
            <select
                id="chart-type"
                value={chartType}
                onChange={handleChartTypeChange}
            >
                <option value="bar">BarChart</option>
                <option value="line">LineChart</option>
                <option value="pie">PieChart</option>
            </select>
            {chart}
        </div>
    );
}

export default ChartSelector;
