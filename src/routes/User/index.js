/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const express = require('express');
const UserController = require('../../controllers/UserController');

const userRouter = express.Router();

userRouter.get('/user', UserController.get);
userRouter.post('/user', UserController.create);
userRouter.put('/user', UserController.update);
userRouter.delete('/user', UserController.destroy);

module.exports = userRouter;