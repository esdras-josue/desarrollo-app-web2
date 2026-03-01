use segundo_parcial_db;
select * from employee;
select * from product_v6;

-- 1. Contar productos en la tabla:
SELECT COUNT(*) AS Productos FROM product_v6;

-- 2. Calcular el valor total de todos los productos
select sum(value) as valorTotal from product_v6;

-- 3. obtener el valor promedio de los productos
select avg(value) as valorPromedio from product_v6;

-- 4. Encontrar el producto con el valor más alto
-- select name, value from product_v6 where value = (select max(value) from product_v6);
select productType, max(value) valorMaximo from product_v6 group by productType;

-- 5. Encontrar el producto con el valor mas bajo 
select productType, min(value) valorMinimo from product_v6 group by productType;

-- 6. Contar el numero de productos de cada tipo de moneda
select valueCurrency, count(*) as totalProductos from product_v6 group by valueCurrency;

-- 7. Calcular el valor promedio de los productos por cada tipo de moneda (valueCurrency)
select valueCurrency, avg(value) as promedioProductos from product_v6 group by valueCurrency;

-- 8. Obtener el valor total de los productos por productType
select productType, sum(value) as valorTotal from product_v6 group by productType;

-- 9. Enccontrar el valor maximo y minimo de productType
select productType, min(value) as valorMinimo, max(value) as valorMaximo from product_v6 group by productType;

-- 10. Calcular el valor promedio de productos por cada categoryCode
select categoryCode, avg(value) as valorPromedio from product_v6 group by categoryCode;

-- 11 .Contar productos disponibles en cada status
select status, count(*) as productos from product_v6 group by status;

-- 12. Calcular el valor total de productos en cada brandCode:
select brandCode, sum(value) valorTotal from product_v6 group by brandCode;

-- 13. Obtener el número total de códigos de productos únicos (partNumber)
select count(partNumber) from product_v6;

-- 14. Calcular el valor promedio y la cantidad de productos por cada lineCode
select lineCode, avg(value) as valorPromedio, count(*) as totalProductos from product_v6 group by lineCode;

-- 15. Encontrar el producto con el valor más alto por cada plannerCode
select plannerCode, max(value) as maximoValor from product_v6 group by plannerCode;




