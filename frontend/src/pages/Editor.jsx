import {useEffect} from "react";
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';
import SaveButtonComponent from '../components/buttons/SaveButtonComponent.jsx';
import {saveChart, fetchChartById} from '../api/api';
import {useData} from "../context/UseData.jsx";
import {DataProvider} from "../context/ProviderValue.jsx";
import '../components/styles/Editor.css';
import {useParams} from "react-router-dom";
import {getRows} from "../components/tables/ReactGridTableUtils.jsx";

const Editor = () => {
    const {id} = useParams();
    const {chartData, chartType, setChartData, setChartType, setChartId, chartId} = useData();

    useEffect(() => {
        console.log('EDITOR chartData geändert: ', chartData);
    }, [chartData]);

    useEffect(() => {
        console.log('EDITOR chartType geändert: ', chartType);
    }, [chartType]);

    useEffect(() => {
        console.log('EDITOR chartId geändert: ', chartId);
    }, [chartId]);


    useEffect(() => {
        if (!id) {
            setChartData(getRows());
            setChartType('bar');
            setChartId(null);
            return;
        }

        const fetchData = async () => {
            const data = await fetchChartById(id);
            console.log('GOT DATA', data);
            setChartData(data.data.gridData);
            setChartType(data.data.type);
            setChartId(data.data._id);
        }
        fetchData();
    }, [id]);

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
        <>
            <ChartDisplay className='chart-display' isEditor={true}/>
            <ReactGridTable className='table-display'/>
            <SaveButtonComponent className='save-button' onClick={saveToDatabase}/>
        </>
    );
}

export default Editor;
