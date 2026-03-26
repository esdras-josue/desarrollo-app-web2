const express = require('express');
const cors = require('cors');
const sequelize = require('../src/database/conexion');
const Empleados = require('../src/models/Empleados');
const Producto = require('../src/models/Product');


const app = express();
app.use(cors());
app.use(express.json());

/**
-- 10. Calcular el valor promedio de productos por cada categoryCode
select categoryCode, avg(value) as valorPromedio from product_v6 group by categoryCode; */

app.get('/api/agv-value-product', async(req, res) =>{
    try {
        const data= await Producto.findAll({
            attributes:[
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'ValorPromedio']],
            group: ['categoryCode'],
        });

        if(data.length === 0){
            res.status(400).json({ message: 'No se encontraron datos'});
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error: error.message});
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Aplicacion corriendo en puerto ${PORT}`);
});
