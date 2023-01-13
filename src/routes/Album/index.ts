/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import AlbumController from '../../controllers/AlbumController';

const albumRouter = express.Router();

albumRouter.get('/album', AlbumController.get);
albumRouter.post('/album', AlbumController.create);

export default albumRouter;