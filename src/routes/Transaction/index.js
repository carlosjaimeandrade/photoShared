/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

const express = require('express');
const TransactionController = require('../../controllers/TransactionController');

const userRouter = express.Router();

userRouter.get('/transaction', TransactionController.get);
userRouter.post('/transaction', TransactionController.create);
userRouter.put('/transaction/:id', TransactionController.update);
userRouter.delete('/transaction/:id', TransactionController.destroy);

module.exports = userRouter;