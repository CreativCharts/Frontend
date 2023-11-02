import {useData} from '../charts/DataContext';
import {saveChart} from '../../api/api';

export default function SaveButtonComponent() {
    const {chartData} = useData();

    const saveToDatabase = async () => {
        const dataToSave = { gridData: chartData };
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
        <button onClick={saveToDatabase}>Speichern</button>
    );
}

