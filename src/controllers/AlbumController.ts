/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import { Request, Response } from "express";
import Album from "../Models/Album";
import message  from '../helpers/messageHttp';
import sharedLink from '../helpers/sharedLinkGeneratorAlbum'
import pin from '../helpers/pinGeneratorAlbum'
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
    try {
        const destination = req.file?.destination
        const filename = req.file?.filename
        const photographPath = `${destination}/${filename}`

        const album = await Album.findOne({ where: { name: req.body.name }})

        if(album){
            res.status(200);
            res.json({
                error: message['DuplicateAlbumName'],
                code: 400,
                album: {}
            })
        }
    
        const newAlbum = await Album.create({
            name: req.body.name,
            description: req.body.description,
            photographPath,
            visibility: req.body.visibility,
            linkShared: sharedLink(),
            pin: pin(),
            price: req.body.price
        })

        res.status(200);
        res.json({
            error: null,
            code: 200,
            album: newAlbum
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

export default {
    get,
    create
}