/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Model, DataTypes } from 'sequelize';
import connection from '../config/database';

import Album from './Album';

interface IPhotoInstance extends Model {
    id: number;
    name: string;
    description: string;
    photographicPath: string;
    private: boolean;
    price: number;
    statusPayment: boolean;
}

const Photo = connection.sequelize.define<IPhotoInstance>('Photo', {
    id: {
        type: DataTypes.NUMBER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    photographPath: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 1
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    statusPayment: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 0
    }
}, {
    tableName: 'photos',
    timestamps: true
});

Album.hasMany(Photo)
Photo.sync({ force: false })


export default Photo;