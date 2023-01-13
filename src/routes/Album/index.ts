/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import AlbumController from '../../controllers/AlbumController';
import albumMulter from '../../helpers/albumMulterConfig'

const uploadAlbum = albumMulter.import({ storage: albumMulter.storage });

const albumRouter = express.Router();

albumRouter.get('/album', AlbumController.get);
albumRouter.post('/album',uploadAlbum.single('photo'), AlbumController.create);

export default albumRouter;