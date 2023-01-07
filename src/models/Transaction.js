/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const Sequelize = require('sequelize')
const { sequelize } = require('../config/database');
const User = require('./User');
const Photo = require('./Photo');

const Transaction = sequelize.define('transaction', {
    value: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

User.hasMany(Transaction)
Photo.hasMany(Transaction)

Transaction.sync({ force: false })

module.exports = Transaction;