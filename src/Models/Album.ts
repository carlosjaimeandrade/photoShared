/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Model, DataTypes } from 'sequelize';
import connection from '../config/database';

interface IUserInstance extends Model {
    id: number;
    name: string;
    description: string;
    photographicPath: string;
    linkShared: string;
    pin: string;
    visibility: string;
}

const Album = connection.sequelize.define<IUserInstance>('Album', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photographPath: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    linkShared: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    pin: {
        type: DataTypes.STRING,
        allowNull: false
    },
    visibility: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'albums',
    timestamps: true
});

Album.sync({ force: false })

export default Album;