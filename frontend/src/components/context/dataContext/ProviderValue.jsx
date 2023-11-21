import {useMemo, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {DataContext} from "./DataContext.jsx";
import {getRows} from "../../tables/ReactGridTableUtils.jsx";


export const DataProvider = ({children}) => {
    const [chartTitle, setChartTitle] = useState('');
    const [chartDescription, setChartDescription] = useState('');
    const [chartData, setChartData] = useState(getRows());
    const [chartType, setChartType] = useState('bar');
    const [chartId, setChartId] = useState("");

    useEffect(() => {
        console.log('DataProvider chartTitle geändert: ', chartTitle);
    }, [chartTitle]);

    useEffect(() => {
        console.log('DataDescription chartType geändert: ', chartDescription);
    }, [chartDescription]);

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
        chartTitle,
        setChartTitle,
        chartDescription,
        setChartDescription,
    }), [
        chartData,
        chartType,
        chartId,
        chartTitle,
        setChartTitle,
        chartDescription,
        setChartDescription
    ]);

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
