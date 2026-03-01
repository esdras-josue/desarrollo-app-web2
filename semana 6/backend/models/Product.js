const sequelize = require('../db/conexion');
const { DataTypes } = require('sequelize');

const Producto = sequelize.define('Product', {

    valueCurrency: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    value: {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    sourceLink: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    productType: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    productSegmentCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    plannerCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    partNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lineCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    familyCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    defaultQuantityUnits: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoryCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    brandCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },

},{
    tableName: 'product_v6',
    timestamps: false,
});

module.exports = Producto;