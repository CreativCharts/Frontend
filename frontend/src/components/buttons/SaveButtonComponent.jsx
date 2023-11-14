import {useData} from '../charts/DataContext';
import {saveChart} from '../../api/api';

const SaveButtonComponent = () => {
    const { chartData, chartType} = useData();


    const saveToDatabase = async () => {
        const dataToSave = {type: chartType, gridData: chartData};
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

    /*das alle daten richtig gespeichert werden*/
    return (
        <button onClick={saveToDatabase}>Save</button>
    );
}


export default SaveButtonComponent;
