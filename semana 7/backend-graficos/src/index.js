const express = require('express');
const cors = require('cors');
const sequelize = require('../src/db/conexion');
const Producto = require('../src/models/Product');

const app = express();
app.use(cors());
app.use(express.json());

/* 1. contar productos en la tabla
select COUNT(*) AS Productos FROM product_v6 */
app.get('/api/producto/count-producto', async (req, res) =>{
    try {
        const data = await Producto.findAll({
            attributes:[
                'productType',
                [sequelize.fn('COUNT',sequelize.col('*')), 'Productos'],
            ],
            group: ['productType'],
        });

        if(data.length === 0) {
            return res.status(400).json({ message: 'No se encontaron productos'});
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ erorr: 'Ocurrio un error', error: error.message});
    }
});

/* -- 4. Encontrar el producto con el valor más alto
-- select name, value from product_v6 where value = (select max(value) from product_v6);
select productType, max(value) valorMaximo from product_v6 group by productType; */
app.get('/api/producto/high-value-products', async(req, res) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('Max', sequelize.col('value')), 'valorMaximo']
            ],
            group: ['productType'],
        });

        if(data.length === 0){
            return res.status(400).json({ message: 'No se encontraros datos' });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

/* 9. Encontar el valor maximo y minimo de productType 
select productType, min(value) as valorMinimo, max(value) as valorMaximo from product_v6 group by productType*/
app.get('/api/producto/min-max-by-type', async (req, res) => {
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
            return res.status(400).json({ message: 'No se encontraron datos' });
        }

        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener datos', error: error.message});
    }
});

/**-- 7. Calcular el valor promedio de los productos por cada tipo de moneda (valueCurrency)
select valueCurrency, avg(value) as promedioProductos from product_v6 group by valueCurrency;  SE QUEDA*/
app.get('/api/producto/avg-producto-value', async (req, resp) =>{
    try {
        const data = await Producto.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedioProductos']],
            group: ['valueCurrency'],
        });

        if(data.length === 0) {
            resp.status(400).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Erorr al obtener los datos', error: error.message });
    }
});

/**-- 12. Calcular el valor total de productos en cada brandCode:
select brandCode, sum(value) valorTotal from product_v6 group by brandCode; */
app.get('/api/producto/total-value-brand', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'brandCode',
                [sequelize.fn('SUM', sequelize.col('value')), 'valorTotal']
            ],
            group: ['brandCode'],
        });

        if(data.length === 0){
            resp.status(400).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`APP running on PORT: ${PORT}`)
});
