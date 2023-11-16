import {useMemo, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {DataContext} from "./DataContext.jsx";
import {getRows} from "../components/tables/ReactGridTableUtils.jsx";

export const DataProvider = ({children}) => {
    const [chartData, setChartData] = useState(getRows());
    const [chartType, setChartType] = useState('bar');
    const [chartId, setChartId] = useState();

    useEffect(() => {
        console.log('DataProvider chartData geändert: ', chartData);
    }, [chartData]);

    useEffect(() => {
        console.log('DataProvider chartType geändert: ', chartType);
    }, [chartType]);

    useEffect(() => {
        console.log('DataProvider chartId geändert: ', chartId);
    }, [chartId]);

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
