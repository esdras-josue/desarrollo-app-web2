import axios from "axios";


const API_URL = 'http://localhost:5000/api/productos';

export const fetchCountProducts = async () =>{
    try {
        const response = await axios.get(`${API_URL}/count-producto`);
        return response.data;
    } catch (error) {
        console.error("Error en fetchCountProducto:", error);
        throw error;
    }
};
