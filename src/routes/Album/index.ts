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

/**
 * Validator for checking if the image may to do uploading (create)
 */
const uploadAlbumCreate = albumMulterCreate.import({ 
    storage: albumMulterCreate.storage,
    fileFilter: async (req, file, cb) => {
        const album = await Album.findOne({ where: { name: req.body.name }})
        console.log(album)
        if(album == null){
            cb(null, true)
            return
        }
        cb(null, false)
    }
});
const uploadAlbumUpdate = albumMulterUpdate.import({ storage: albumMulterUpdate.storage });

const albumRouter = express.Router();

albumRouter.get('/album', AlbumController.get);
albumRouter.post('/album',uploadAlbumCreate.single('photo'), AlbumController.create);
albumRouter.put('/album/:id', uploadAlbumUpdate.single('photo'), AlbumController.update);

export default albumRouter;