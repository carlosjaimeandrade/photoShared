/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */
import { Model, DataTypes } from 'sequelize';
import connection from '../config/database';

interface IUserInstance extends Model {
    id: number;
    avatar: string;
    name: string;
    email: string;
    telephone: string;
    cpf: string;
    pix: string;
    password: string;
    type: number;
    status: boolean;
    createdAt: string;
    updatedAt: string;
}

const User = connection.sequelize.define<IUserInstance>('users', {
    avatar: {
        type: DataTypes.STRING,
        allowNull: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telephone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    pix: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
}, {
    tableName: 'users',
    timestamps: true
})

User.sync({ force: false })

export default User;