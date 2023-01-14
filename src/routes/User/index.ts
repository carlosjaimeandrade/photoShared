/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';

import UserController from '../../controllers/UserController';

const userRouter = express.Router();

userRouter.get('/user', UserController.get);
userRouter.post('/user', UserController.create);
userRouter.put('/user/:id', UserController.update);
userRouter.delete('/user/:id', UserController.destroy);

export default userRouter;