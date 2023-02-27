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
import { Op } from "sequelize";

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

/**
 * Get one values from entity
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
const getOne = async (req: Request, res: Response) => {
    try {
        const albuns = await Album.findByPk(req.params.id);

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
            return
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

const update = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const destination = req.file?.destination
        const filename = req.file?.filename
        const photographPath = `${destination}/${filename}`

        const album = await Album.findOne({ where: { name: req.body.name, id: { [Op.ne]: id } }})

        if(album){
            res.status(200);
            res.json({
                error: message['DuplicateAlbumName'],
                code: 400,
                album: {}
            })
            return
        }

        const updateAlbum = await Album.update({
            name: req.body.name,
            description: req.body.description,
            photographPath,
            visibility: req.body.visibility,
            price: req.body.price
        }, {
            where: { id }
        })

        res.status(200);
        res.json({
            error: null,
            code: 200,
            album: updateAlbum
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
    getOne,
    create,
    update
}