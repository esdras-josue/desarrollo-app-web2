const sequelize = require('../db/conexion');
const { DataTypes } = require('sequelize');

const Producto = sequelize.define('Product',{
    valueCurrency:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    value:{
        type: DataTypes.DOUBLE,
        allowNull: true,
    },
    status:{
        type: DataTypes.STRING,
        alloNull: true,
    },
    sourceLink:{
        type: DataTypes.STRING,
        allowNull: true
    },
    ProductType:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    productSegmentCode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    plannerCode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    partNumber:{
        type: DataTypes.STRING,
        alloNull: true,
    },    
    name:{
        type: DataTypes.STRING,
        allowNull: true
    },
    lineCode:{
        type: DataTypes.STRING,
        alloNull: true,
    },
    familyCode:{
        type: DataTypes.STRING,
        alloNull: true,
    },
    description: {
        type: DataTypes.STRING,
        alloNull: true,
    },
    defaultQuantityUnits:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoryCode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoryCode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    brandCode:{
        type: DataTypes.STRING,
        allowNull: true,
    },

},{
    tableName: 'product_v6',
    timestamps: false,  
});

module.exports = Producto;