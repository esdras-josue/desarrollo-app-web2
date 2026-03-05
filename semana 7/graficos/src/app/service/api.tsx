import axios from "axios";

const API_URL = "http://localhost:5000/api/producto";

export const fetchCountProducto = async () => {
    try {
        const response = await axios.get(`${API_URL}/count-producto`);
        return response.data;
    } catch (error) {
        console.error("Error en fetchCountProducto:", error);
        throw error;
    }
};

export const fetchAvgProdValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/avg-producto-value`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
        
    }
};

export const fetchMinMaxValue = async () => {
    try {
        const response = await axios.get(`${API_URL}/min-max-by-type`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    } 
};

export const fetchTotalValueBrand = async () => {
    try {
        const response = await axios.get(`${API_URL}/total-value-brand`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
        throw error;
    }
};
//total-value-brand
