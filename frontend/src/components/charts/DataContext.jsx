import { createContext, useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [chartData, setChartData] = useState([]);
    const [chartType, setChartType] = useState('line');

    const providerValue = useMemo(() => ({
        chartData,
        setChartData,
        chartType,
        setChartType
    }), [chartData, chartType]);

    return (
        <DataContext.Provider value={providerValue}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
