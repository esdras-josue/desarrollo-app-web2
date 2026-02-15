const { DataTypes } = require("sequelize");
const sequelize = require("../db/connetion");

const Carrito = sequelize.define('carrito', {
    idCarrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idProducto: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    totalPagar: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    tableName: 'carrito',
    timestamps: false
});


module.exports = Carrito;
