/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Request, Response } from "express";
import Album from "../Models/Album";
import message  from '../helpers/messageHttp';
import log from '../helpers/monolog';

/**
 * Get all values from entity
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const get = async (req: Request, res: Response) => {
    try {
        const albuns = await Album.findAll();

        res.status(200);
        res.json({
            error: null,
            code: 200,
            albuns
        })

    } catch (error: any) {
        log.err(error.message)
        res.status(500);
        res.json({
            error: message['500'],
            code: 500,
            album: {}
        })
    }
}

const create = async (req: Request, res: Response) => {
    res.json(req)
}

export default {
    get,
    create
}