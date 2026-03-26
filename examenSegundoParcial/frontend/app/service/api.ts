import axios from "axios";

const API_URL = 'http://localhost:5000/api';


/**agv-value-product */
export const fetchAvgValueProduct = async()=>{
    try {
        const response = await axios.get(`${API_URL}/agv-value-product`);
        return response.data;
    } catch (error) {
        console.error("Eror al hacer fetch de datos:", error);
        throw error;
    }
}