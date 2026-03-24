const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');


const Empleado = sequelize.define('employees',{

    EMPLOYEE_ID: {
        type: DataTypes.INTEGER,
    },
    FIRST_NAME: {
        type: DataTypes.STRING,
    },
    EMAIL: {
        type: DataTypes.STRING,
    },
    PHONE_NUMBER: {
        type: DataTypes.STRING,
    },
    HIRE_DATE: {
        type: DataTypes.STRING,
    },
    JOB_ID: {
        type: DataTypes.STRING,
    },
    SALARY: {
        type: DataTypes.INTEGER,
    },
    COMMISSION_PCT: {
        type: DataTypes.STRING,
    },
    MANAGER_ID: {
        type: DataTypes.INTEGER,
    },
    DEPARTMENT_ID: {
        type: DataTypes.INTEGER,
    },
},{
    tableName: 'employees',
    timeStamp: false,

});

module.exports = Empleado;