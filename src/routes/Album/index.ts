/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import AlbumController from '../../controllers/AlbumController';
import albumMulterCreate from '../../helpers/album/albumMulterCreate'

const uploadAlbumCreate = albumMulterCreate.import({ storage: albumMulterCreate.storage });

const albumRouter = express.Router();

albumRouter.get('/album', AlbumController.get);
albumRouter.post('/album',uploadAlbumCreate.single('photo'), AlbumController.create);
albumRouter.put('/album/:id', AlbumController.update);

export default albumRouter;