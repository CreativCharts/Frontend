import {useEffect} from "react";
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';
import SaveButtonComponent from '../components/buttons/SaveButtonComponent.jsx';
import {saveChart, fetchChartById} from '../api/api';
import {useData} from "../context/UseData.jsx";
import {useParams} from "react-router-dom";
import {getRows} from "../components/tables/ReactGridTableUtils.jsx";
import '../components/styles/Editor.css';


const Editor = () => {
    const {id} = useParams();
    const {
        chartId,
        chartData,
        chartType,
        chartTitle,
        chartDescription,
        setChartData,
        setChartType,
        setChartTitle,
        setChartDescription,
        setChartId
    } = useData();

    useEffect(() => {
        console.log('EDITOR chartTitle geändert: ', chartTitle);
    }, [chartTitle]);

    useEffect(() => {
        console.log('EDITOR chartSubtitle geändert: ', chartDescription);
    }, [chartDescription]);

    useEffect(() => {
        console.log('EDITOR chartId geändert: ', chartId);
    }, [chartId]);


    useEffect(() => {
        if (!id) {
            setChartData(getRows());
            setChartType('bar');
            setChartTitle('Neuer Chart');
            setChartDescription('');
            setChartId(null);
            return;
        }

        const fetchData = async () => {
            const data = await fetchChartById(id);
            console.log('GOT DATA', data.description);
            setChartData(data.data.gridData);
            setChartType(data.data.type);
            setChartTitle(data.data.title);
            setChartDescription(data.data.description);
            setChartId(data.data._id);
        }
        fetchData();

    }, [id]);

    const saveToDatabase = async () => {

        const dataToSave = {
            id: chartId,
            type: chartType,
            title: chartTitle,
            description: chartDescription,
            data: chartData,
        }

        console.log('Daten an den Server: ', dataToSave);

        await saveChart(dataToSave);
    }

    const handleTitleChange = (e) => {
        setChartTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setChartDescription(e.target.value);
    };


    return (
        <>
            <input type="text"
                   onChange={handleTitleChange}
                   value={chartTitle}
                   placeholder="Titel"/>

            <input type="text"
                   value={chartDescription}
                   onChange={handleDescriptionChange}
                   placeholder="Beschreibung"/>

            <ChartDisplay className='chart-display' isEditor={true}/>
            <ReactGridTable className='table-display'/>
            <SaveButtonComponent className='save-button' onClick={saveToDatabase}/>
        </>
    );
}

export default Editor;
