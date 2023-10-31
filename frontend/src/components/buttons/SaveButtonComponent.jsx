import React from 'react';
import { useData } from '../charts/DataContext';
import { saveChart } from '../../api/api';

export default function SaveButtonComponent() {
    const { chartData } = useData();

const saveToDatabase = async () => {
    try {
        console.log('Sending this data to server:', chartData);
        const response = await saveChart(chartData);
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
