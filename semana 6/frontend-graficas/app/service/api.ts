import axios from "axios";


const API_URL = 'http://localhost:5000/api/productos';

export const fetchCountProducts = async () => {
    try {
        const response = await axios.get(`${API_URL}/count-producto`);
        return response.data;
    } catch (error) {
        console.error("Error en fetchCountProducto:", error);
        throw error;
    }
};

export const fetchTotalProductsValues = async () => {
    try {
        const response = await axios.get(`${API_URL}/total-value`);
        return response.data;
    } catch (error) {
        console.error('Error en fetchTotalProductsValues:', error);
        throw error;
    }   
};

export const fetchAvgValueProduct = async () => {
    try {
        const response = await axios.get(`${API_URL}/avg-value`);
        return response.data;
    } catch (error) {
        console.error('Error en fetchTotalProductsValues:', error);
        throw error;
    }
};

export const fetchMaxValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/max-value`);
        return response.data;
    } catch (error) {
        console.error('Error en fetchMaxValue:', error);
        throw error;
    }
};

export const fetchMinValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/min-value`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener datos', error);
        throw error;
    }
};