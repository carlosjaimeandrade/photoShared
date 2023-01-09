/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */
import { Request, Response } from "express";
import { Op } from "sequelize";
import { hashSync } from "bcrypt";
import { validationResult } from 'express-validator';

import User from '../Models/User';
import log from '../helpers/monolog';
import message from '../helpers/message';

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const get = async (req: Request, res: Response) => {
    try {

        const { id, search } = req.query;

        const user = await User.findAll({
            where: {
                ...(id && { id: parseInt(id as string) }),
                ...(search && {
                    [Op.or]: [
                        { name: { [Op.like]: `%${search}%` } },
                        { email: { [Op.like]: `%${search}%` } },
                        { cpf: { [Op.like]: `%${search}%` } }
                    ]
                })
            },
            order: [
                ["id", 'DESC']
            ]
        });

        if (!user) {
            res.status(400);
            res.json({
                code: 200,
                error: message['400'],
                user: null
            });
            return;
        }

        res.status(200);
        res.json({
            code: 200,
            error: null,            
            user: user.map((item) => {
                return {
                    id: item.id,
                    avatar: item.avatar,
                    name: item.name,
                    email: item.email,
                    telephone: item.telephone,
                    cpf: item.cpf,
                    ...(item.pix && { pix: item.pix }),
                    type: item.type,
                    status: item.status,
                    createdAt: item.createdAt,
                    updatedAt: item.updatedAt
                }
            })[0]
        });

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            code: 500,
            error: message['500'],
            user: null
        })
    }
}

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const create = async (req: Request, res: Response) => {
    try {

        const errors = validationResult(req);
        const { name, email, telephone, cpf, pix, password, type } = req.body;

        console.log(errors);


        if (!errors.isEmpty()) {
            res.status(406);
            res.json({
                code: 406,
                error: message['406'],
                user: null
            });
            return;
        }

        const cryptPassword = hashSync(password, 10);

        const [check, created] = await User.findOrCreate({
            defaults: {
                name,
                email,
                telephone,
                cpf,
                ...(pix && pix),
                password: cryptPassword,
                type: parseInt(type)
            },
            where: { email }
        });

        if (!created) {
            res.status(409);
            res.json({
                code: 409,
                error: message['409'],
                user: null
            });
            return;
        };

        res.status(201);
        res.json({
            code: 201,
            error: message['201'],
            user: {
                id: check.id,
                name: check.name,
                email: check.email
            }
        });

    } catch (error: any) {
        console.log(error);
        // log.err(error.message)
        res.status(500);
        res.json({
            code: 500,
            error: message['500'],
            user: null
        })
    }
}

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const update = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            code: 500,
            error: message['500'],
            user: null
        })
    }
}

/**
 * meuvooooooo
 * @param {*} req 
 * @param {*} res 
 */
const destroy = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            code: 500,
            error: message['500'],
            user: null
        })
    }
}

export default {
    get,
    create,
    update,
    destroy
}