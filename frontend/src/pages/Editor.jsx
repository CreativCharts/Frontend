import React from 'react';
import { DataProvider, useData } from '../components/charts/DataContext.jsx';
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';
import { saveChart } from '../api/api';
import SaveButtonComponent from '../components/buttons/SaveButtonComponent.jsx';
import '../components/styles/Editor.css';

const Editor = () => {
    const { chartData } = useData();

    const saveToDatabase = async () => {
        try {
            const response = await saveChart(chartData);
            if (response) {
                console.log('Chart saved successfully:', response);
            }
        } catch (error) {
            console.error('Error saving chart:', error);
        }
    };

    return (
        <>
            <DataProvider>
                <ChartDisplay className='chart-display' isEditor={true} />
                <ReactGridTable className='table-display' />
                <SaveButtonComponent onClick={saveToDatabase} />
            </DataProvider>
        </>
    );
}

export default Editor;
