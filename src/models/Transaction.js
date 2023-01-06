const Sequelize = require('sequelize')
const { sequelize } = require('../config/database');
const User = require('./User');
const Photo = require('./Photo');

const Transaction = sequelize.define('transaction', {
    valor: {
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