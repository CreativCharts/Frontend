import axios from 'axios';
import {API_BASE_URL, API_ENDPOINTS} from './apiSettings';

export const saveChart = async (chartData) => {
    const response = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.createChart}`, chartData);
    return response.data;
};


export const fetchCharts = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}${API_ENDPOINTS.allCharts}`);
        return {data: response.data, error: null};
    } catch (error) {
        console.error("Error in fetching charts from backend:", error);
        return {data: null, error: error.message || "An error occurred"};
    }
};
