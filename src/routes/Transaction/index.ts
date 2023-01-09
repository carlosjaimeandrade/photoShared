/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import TransactionController from '../../controllers/TransactionController';

const transactionRouter = express.Router();

transactionRouter.get('/transaction', TransactionController.get);
transactionRouter.post('/transaction', TransactionController.create);
transactionRouter.put('/transaction/:id', TransactionController.update);
transactionRouter.delete('/transaction/:id', TransactionController.destroy);

export default transactionRouter;