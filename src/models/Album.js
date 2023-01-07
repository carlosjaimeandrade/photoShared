/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const Sequelize = require('sequelize')
const { sequelize } = require('../config/database');

const Album = sequelize.define('album', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    photographPath: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    linkShared: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    pin: {
        type: Sequelize.STRING,
        allowNull: false
    },
    visibility: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Album.sync({ force: false })

module.exports = Album;