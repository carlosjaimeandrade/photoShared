/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import AlbumController from '../../controllers/AlbumController';
import albumMulterCreate from '../../helpers/album/albumMulterCreate'
import albumMulterUpdate from '../../helpers/album/albumMulterUpdate'
import Album from "../../Models/Album";
import fs from 'fs';
import { Op } from "sequelize";

/**
 * Validator for checking if the image may to do uploading (create)
 */
const uploadAlbumCreate = albumMulterCreate.import({ 
    storage: albumMulterCreate.storage,
    fileFilter: async (req, file, cb) => {
        const album = await Album.findOne({ where: { name: req.body.name }})
        if(album == null){
            cb(null, true)
            return
        }
        cb(null, false)
    }
});

/**
 * Remove album photo and update
 */
const uploadAlbumUpdate = albumMulterUpdate.import({ 
    storage: albumMulterUpdate.storage,
    fileFilter: async (req, file, cb) => {
        const album = await Album.findOne({ where: { id: req.params.id }})
        const isDuplicate = await Album.findOne({ where: { name: req.body.name, id: { [Op.ne]: req.params.id } } })
        if(album && !isDuplicate){
            fs.unlinkSync('./' + album?.photographPath)
            cb(null, true)
            return
        }
        cb(null, false)
    }
});

const albumRouter = express.Router();

albumRouter.get('/album', AlbumController.get);
albumRouter.post('/album', uploadAlbumCreate.single('photo'), AlbumController.create);
albumRouter.put('/album/:id', uploadAlbumUpdate.single('photo'), AlbumController.update);

export default albumRouter;