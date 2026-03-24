const express = require('express');
const sequelize = require('../backend/database/conexion');
const  Product = require('../backend/models/Products');
const Employee = require('../backend/models/Empleados');

const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/sum-salary-by-depto', async (req, res) => {
    try {
        const data = await Employee.findAll({
            attributes: [
                'department_id',
                [sequelize.fn('SUM', sequelize.col('salary')), 'salario_total_depto']],
            group: ['department_id'],        
        });

        if(data.length == 0){
            res.status(400).json({ message: 'No se encontraro datos' });
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos' + error});
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`APP running on PORT: ${PORT}`);
});