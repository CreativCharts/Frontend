import {useEffect} from "react";
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';
import SaveButtonComponent from '../components/buttons/SaveButtonComponent.jsx';
import {saveChart, fetchChartById} from '../api/api';
import '../components/styles/Editor.css';
import {useData} from "../context/UseData.jsx";
import {DataProvider} from "../context/ProviderValue.jsx";

const Editor = () => {
    const {chartData, chartType, setChartData, chartId} = useData();

    useEffect(() => {
        if (!chartId) {
            console.error('Chart ID nicht übergeben!');
            return;
        }
        
        if (chartId) {
            fetchChartById(chartId).then(response => {
                    setChartData(response.data.gridData);
                }
            ).catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    }, [chartId, setChartData]);

    const saveToDatabase = async () => {

        const dataToSave = {
            id: chartId,
            type: chartType,
            data: chartData,
        }
        console.log('Daten an den Server: ', dataToSave);
        await saveChart(dataToSave);
    }

    return (
        <DataProvider>
            <ChartDisplay className='chart-display' isEditor={true}/>
            <ReactGridTable className='table-display'/>
            <SaveButtonComponent className='save-button' onClick={saveToDatabase}/>
        </DataProvider>
    );
}

export default Editor;
