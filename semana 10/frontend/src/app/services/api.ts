import axios from "axios";

const API_URL = 'http://localhost:5000/api';

export const fetchSumSalaryDepto = async() =>{
    try {
        const response = await axios.get(`${API_URL}/sum-salary-by-depto`);
        return response.data;
    } catch (error) {
        console.error("Erorr en fetch de datos:", error);
        throw error;
    }
};
