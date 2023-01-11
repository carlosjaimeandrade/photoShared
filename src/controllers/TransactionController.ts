/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Request, Response } from "express";

import Transaction from '../Models/Transaction';
import message  from '../helpers/messageHttp';
import log from '../helpers/monolog';

/**
 * Get one value from transaction entity
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getOne = async (req: Request, res: Response) => {
    try {
        const transaction = await Transaction.findOne({
            where: {id: req.params.id}
        });

        res.status(200);
        res.json({
            error: null,
            code: 200,
            transaction
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Get all transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const get = async (req: Request, res: Response) => {
    try {
        const transaction = await Transaction.findAll();

        res.status(200);
        res.json({
            error: null,
            code: 200,
            transaction
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Create a new transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const create = async (req: Request, res: Response) => {
    try {
        const transaction = await Transaction.create(req.body);

        res.status(200);
        res.json({
            error: null,
            code: 200,
            transaction
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Update a single item in the database transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const update = async (req: Request, res: Response) => { 
    try {
        await Transaction.update(req.body, {
            where: { id: req.params.id }
        });

        res.status(200);
        res.json({
            error: null,
            code: 200
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

/**
 * Delete one item of entity transaction
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const destroy = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;

        const transaction = await Transaction.findOne({
            where: { id }
        })    

        if(!transaction){
            res.status(400);
            res.json({
                error: message['400'],
                code: 400,
                transaction: {}
            })
            return
        }

        await Transaction.destroy({
            where: { id }
        });

        res.status(200);
        res.json({
            error: null,
            code: 200
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            transaction: {}
        })
    }
}

export default {
    get,
    getOne,
    create,
    update,
    destroy
}