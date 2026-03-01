const express = require('express');
const sequelize = require('../db/conexion');
const Producto = require('../models/Product');
const { group } = require('console');
const { Sequelize } = require('sequelize');


const app = express();
app.use(express.json());

/* -- 1. Contar productos en la tabla:
SELECT COUNT(*) AS Productos FROM product_v6; */ 
app.get('/api/productos/count-producto', async (req, res) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('*')), 'Productos'],  
            ]
        });

        if(data.length === 0){
            res.status(404).json({ message: 'No se encontraron productos'});
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al contar los productos', error: error.message });
    }
});

/**-- 2. Calcular el valor total de todos los productos
select sum(value) as valorTotal from product_v6; */
app.get('/api/productos/total-value', async (req, res) =>{
    try {
        const data = await Producto.findAll({
            attributes: [
                [sequelize.fn('SUM', sequelize.col('value')), 'valorTotal']
            ]
        });

        if(data.length === 0) {
            res.status(404).json({ message: 'No se encotraron datos' });
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los datos ", erorr: error.message});
    }
});

/*
-- 3. obtener el valor promedio de los productos
select avg(value) as valorPromedio from product_v6
*/
app.get('/api/productos/avg-value', async (req, res) =>{
    try {
        const data = await Producto.findAll({
            attributes:[
                [sequelize.fn('avg', sequelize.col('value')), 'valorPromedio'],
            ]
        })

        if(data.length === 0) {
            res.status(404).json({ message: 'No se encontraron productos'});
        }
        else{
            res.status(200).json(data);
        }

    } catch (error) {
        res.status(500).json({ error: 'Error al calcular el valor promedio', error: error.message });
    }
});

/**-- 4. Encontrar el producto con el valor más alto
 * select productType, max(value) valorMaximo from product_v6 group by productType; */
app.get('/api/productos/max-value', async (req, res) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MAX',sequelize.col('value')), 'valorMaximo']],
                group: ['productType'],   
        })
        if(data.length === 0){
            res.status(404).json({ message: 'No se encontraron datos' });
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al calcular el valor maximo', error: error.message });
    }
});

/**-- 5. Encontrar el producto con el valor mas bajo 
select productType, min(value) valorMinimo from product_v6 group by productType; */
app.get('/api/productos/min-value', async (req, res) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('MIN', sequelize.col('value')), 'valorMinimo']],
            group: ['productType'],  
        });

        if(data.length === 0){
            res.status(404).json({ messsage: 'No se encontraron datos'});
        }
        else{
            res.status(200).json(data);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erorr al obtener los datos', error: error.message});
    }
});

/**-- 6. Contar el numero de productos de cada tipo de moneda
select valueCurrency, count(*) as totalProductos from product_v6 group by valueCurrency; */
app.get('/api/producto/value-currency', async (req, resp) =>{
    try {
        const data = await Producto.findAll({
            attributes:[
                'valueCurrency',
                [sequelize.fn('COUNT', sequelize.col('*')), 'totalProductos']],
            group: ['valueCurrency'],
        });

        if(data.length === 0 ){
            resp.status(404).json({ message: 'No se encontraron productos'});
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

/**-- 7. Calcular el valor promedio de los productos por cada tipo de moneda (valueCurrency)
select valueCurrency, avg(value) as promedioProductos from product_v6 group by valueCurrency; */
app.get('/api/producto/avg-producto-value', async (req, resp) =>{
    try {
        const data = await Producto.findAll({
            attributes: [
                'valueCurrency',
                [sequelize.fn('AVG', sequelize.col('value')), 'promedioProductos']],
            group: ['valueCurrency'],
        });

        if(data.length === 0) {
            resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Erorr al obtener los datos', error: error.message });
    }
});

/**-- 8. Obtener el valor total de los productos por productType
select productType, sum(value) as valorTotal from product_v6 group by productType; */
app.get('/api/producto/total-value-product', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'productType',
                [sequelize.fn('SUM', sequelize.col('value')), 'valorTotal']],
            group: ['productType'],
        });

        if(data.length === 0 ){
            resp.status(404).json({ message: 'No se encontraron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al encontrar los datos', message: error.message});
    }
});

/**-- 9. Enccontrar el valor maximo y minimo de productType
select productType, min(value) as valorMinimo, max(value) as valorMaximo from product_v6 group by productType; */
app.get('/api/producto/min-max-by-type', async (req, resp)=>{
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
           return resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener datos', error: error.message});
    }
});

/**-- 10. Calcular el valor promedio de productos por cada categoryCode
select categoryCode, avg(value) as valorPromedio from product_v6 group by categoryCode; */
app.get('/api/producto/avg-value-category-code', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'categoryCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valorPromedio']
            ],
            group: ['categoryCode'],
        });

        if(data.length === 0){
            resp.status(404).json({ message: 'No se encontarron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Erorr al obtener datos', error: error.message});
    }
});

/**-- 11 .Contar productos disponibles en cada status
select status, count(*) as productos from product_v6 group by status; */
app.get('/api/producto/count-productos', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'status',
                [sequelize.fn('COUNT', sequelize.col('*')), 'productos']
            ],
            group: ['status'],
        });

        if(data.length === 0){
            resp.status(404).json({ message: 'no se encontraros datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Eroror al obtener los datos' + erorr.message });
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
            resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

/**-- 13. Obtener el número total de códigos de productos únicos (partNumber)
select count(partNumber) from product_v6; */
app.get('/api/producto/unique-part-number', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                [sequelize.fn('COUNT', sequelize.col('partNumber')), 'totalPartNumber']
            ],
        });

        if(data.length === 0){
            resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

/**-- 14. Calcular el valor promedio y la cantidad de productos por cada lineCode
select lineCode, avg(value) as valorPromedio, count(*) as totalProductos from product_v6 group by lineCode; */
app.get('/api/producto/avg-count-line', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'lineCode',
                [sequelize.fn('AVG', sequelize.col('value')), 'valorPromedio'],
                [sequelize.fn('COUNT', sequelize.col('*')), 'totalProductos']
            ],
            group: ['lineCode'],
        });

        if(data.length === 0){
            resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});

/**-- 15. Encontrar el producto con el valor más alto por cada plannerCode
select plannerCode, max(value) as maximoValor from product_v6 group by plannerCode; */
app.get('/api/producto/max-value-planner', async (req, resp) => {
    try {
        const data = await Producto.findAll({
            attributes: [
                'plannerCode',
                [sequelize.fn('MAX', sequelize.col('value')), 'maximoValor']
            ],
            group: ['plannerCode'],
        });

        if(data.length === 0){
            resp.status(404).json({ message: 'No se encontaron datos' });
        }
        else{
            resp.status(200).json(data);
        }
    } catch (error) {
        resp.status(500).json({ message: 'Error al obtener los datos', error: error.message });
    }
});



app.listen(5000, ()=>{
    console.log('aplicacion corriendo en puerto 5000');
})