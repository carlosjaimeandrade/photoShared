const Sequelize = require('sequelize')
const { sequelize } = require('../config/database');
const Album = require('./Album')

const Photo = sequelize.define('photo', {
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    photographPath: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    private: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    statusPayment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
})

Album.hasMany(Photo)

Photo.sync({ force: false })

module.exports = Photo;