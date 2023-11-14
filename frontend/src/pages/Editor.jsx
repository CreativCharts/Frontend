import {DataProvider, useData} from '../components/charts/DataContext.jsx';
import ReactGridTable from '../components/tables/ReactGridTable.jsx';
import ChartDisplay from '../components/charts/ChartDisplay.jsx';
import {saveChart} from '../api/api';
import SaveButtonComponent from '../components/buttons/SaveButtonComponent.jsx';
import '../components/styles/Editor.css';

const Editor = () => {
    const {chartData, chartType} = useData();

    const saveToDatabase = async () => {
        const dataToSave = {
            data: chartData.data,
            type: chartType,
        };

        console.log('Sending this data to server:', dataToSave);
        try {
            const response = await saveChart(dataToSave);
            if (response) {
                console.log('Chart saved successfully:', response);
            }
        } catch (error) {
            console.error('Error saving chart:', error);
        }
    };

    return (
        <DataProvider>
            <ChartDisplay className='chart-display' isEditor={true}/>
            <ReactGridTable className='table-display'/>
            <SaveButtonComponent className='save-button' onClick={saveToDatabase}/>
        </DataProvider>
    );
}

export default Editor;
