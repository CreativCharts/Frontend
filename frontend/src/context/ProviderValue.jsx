import {useMemo, useState} from "react";
import PropTypes from "prop-types";
import {DataContext} from "./DataContext.jsx";

export const DataProvider = ({children}) => {
    const [chartData, setChartData] = useState([]);
    const [chartType, setChartType] = useState('bar');
    const [chartId, setChartId] = useState();


    const providerValue = useMemo(() => ({
        chartData,
        setChartData,
        chartType,
        setChartType,
        chartId,
        setChartId,
    }), [chartData, chartType, chartId]);

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
