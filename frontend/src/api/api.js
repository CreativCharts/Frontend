import axios from 'axios';
import {API_BASE_URL, API_ENDPOINTS} from './apiSettings';

export const saveChart = async (chartData) => {
    const response = await axios.post(
        `${API_BASE_URL}${API_ENDPOINTS.createChart}`, chartData);

    return response.data;
};

export const fetchAll = async () => {
    try {
        const response = await axios.get(
            `${API_BASE_URL}${API_ENDPOINTS.fetchAll}`);

        if (response.data && Array.isArray(response.data)) {

            console.log("Fetch aus DB: ", response.data);
            return {data: response.data};
        } else {
            console.error('Unerwartetes Datenformat erhalten:', response.data);
            return {data: [], error: 'Ungültiges Datenformat'};
        }

    } catch (error) {

        console.error('Fehler beim Abrufen der Daten:', error);
        return {data: [], error: error.message};
    }
};
