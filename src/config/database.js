const Sequelize = require('sequelize');

let sequelize;
const env = process.env.NODE_ENV || 'development';

const config = {
    production: {
        username: process.env.DBPROD_USER,
        password: process.env.DBPROD_PASS,
        database: process.env.DBPROD_NAME,
        host: process.env.DBPROD_HOST
    },
    development: {
        username: process.env.DBDEV_USER,
        password: process.env.DBDEV_PASS,
        database: process.env.DBDEV_NAME,
        host: process.env.DBDEV_HOST
    }
};

if (env === 'production') {
    sequelize = new Sequelize(
        config.production.database,
        config.production.username,
        config.production.password, {
        host: config.production.host,
        dialect: "mysql",
        timezone: '-03:00',
        dialectOptions: {
            useUTC: false
        }
    });

} else {
    sequelize = new Sequelize(
        config.development.database,
        config.development.username,
        config.development.password, {
        host: config.development.host,
        dialect: "mysql",
        timezone: '-03:00',
        dialectOptions: {
            useUTC: false
        }
    });
};

const testConnection = async () => {
    try {
        sequelize.authenticate();
        console.log("DB-ON Authenticated");
    } catch (error) {
        console.log("DB-OFF Authebticated");
    }
};

module.exports = { sequelize, testConnection };