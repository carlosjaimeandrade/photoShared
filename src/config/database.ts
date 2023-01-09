/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Sequelize } from 'sequelize';

let sequelize: Sequelize;
const env = process.env.NODE_ENV || 'development';

const config = {
    production: {
        username: process.env.DBPROD_USER as string,
        password: process.env.DBPROD_PASS as string,
        database: process.env.DBPROD_NAME as string,
        host: process.env.DBPROD_HOST as string
    },
    development: {
        username: process.env.DBDEV_USER as string,
        password: process.env.DBDEV_PASS as string,
        database: process.env.DBDEV_NAME as string,
        host: process.env.DBDEV_HOST as string
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

export default { sequelize, testConnection };