import React from 'react';
import { useData } from '../charts/DataContext';
import { saveChart } from '../../api/api';

export default function SaveButtonComponent() {
    const { chartData } = useData();

    const handleSave = async () => {
        await saveChart(chartData);
    };

    return (
        <button onClick={handleSave}>Speichern</button>
    );
}
