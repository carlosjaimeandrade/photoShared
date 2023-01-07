const express = require('express');
const TransactionController = require('../../controllers/TransactionController');

const userRouter = express.Router();

userRouter.get('/transaction', TransactionController.get);
userRouter.post('/transaction', TransactionController.create);
userRouter.put('/transaction', TransactionController.update);
userRouter.delete('/transaction', TransactionController.destroy);

module.exports = userRouter;