const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const  produto = sequelize.define('produtos', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING(),
        validate: {
            len: [10, 60]
        },
        allowNull: false
    },
    dsc: {
        type: DataTypes.STRING,
        validate: {
            len: [10, 500]
        },
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        validate: {
            len: [10, 30]
        },
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }

})

module.exports = produto;