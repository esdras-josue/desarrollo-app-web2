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
