const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'segundo_parcial_db',
    'root',
    'root',
    {
        host: 'localhost',
        port: 3306,
        dialect: 'mysql'
    }
);

sequelize.authenticate()
    .then(() => {console.log('conexion exitosa')})
    .catch((error) => {console.log('Error de conexion', error)})

module.exports = sequelize;