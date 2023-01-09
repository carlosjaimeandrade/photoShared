/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Model, DataTypes } from 'sequelize';
import connection from '../config/database';

import Photo from './Photo';
import User from './User';

interface ITransactionInstance extends Model {
    id: number;
    value: number;
    status: string;
};

const Transaction = connection.sequelize.define<ITransactionInstance>('Transaction', {
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'transactions',
    timestamps: true
});

User.hasMany(Transaction);
Photo.hasMany(Transaction);

Transaction.sync({ force: false })

export default Transaction;