const express = require('express');
const cors = require('cors');
const sequelize = require('../src/db/conexion');
const Producto = require('../src/models/Product');

const app = express();
app.use(cors());
app.use(express.json());

/* 1. contar productos en la tabla
select COUNT(*) AS Productos FROM product_v6 */
app.get('/api/productos/count-producto', async (req, res) =>{
    try {
        const data = await Producto.findAll({
            attributes:[
                'productType',
                [sequelize.fn('COUNT',sequelize.col('*')), 'Productos'],
            ],
            group: ['productType'],
        });

        if(data.length === 0) {
            return res.status(404).json({ message: 'No se encontaron productos'});
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ erorr: 'Ocurrio un error', error: error.message});
    }
});

/* 2. Calcular el valor total de todos los productos
select sum(value) as valorTotal from product_v6 */
app.get('/api/productos/total-value', async (req, res) =>{
    try {
        const data = await Producto.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('value')), 'valorTotal']
            ]
        });

        if(data.length === 0 ){
            return res.status(404).json({ message: 'No se encontraron datos' });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error: error.message });
    }
});

/* 9. Encontar el valor maximo y minimo de productType 
select productType, min(value) as valorMinimo, max(value) as valorMaximo from product_v6 group by productType*/
app.get('/api/productos/min-max-by-type', async (req, res) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MIN', sequelize.col('value')), 'valorMinimo'],
                [sequelize.fn('MAX', sequelize.col('value')), 'valorMaximo']
            ],
            group: ['productType'],
        });
        
        if(data.length === 0){
            return res.status(404).json({ message: 'No se encontraron datos' });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error: error.message});
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`APP running on PORT: ${PORT}`)
});