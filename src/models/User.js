/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const Sequelize = require('sequelize')
const { sequelize } = require('../config/database');

const User = sequelize.define('users', {
    avatar: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telephone: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    pix: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    type: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
    },
})

User.sync({ force: false })

module.exports = User;