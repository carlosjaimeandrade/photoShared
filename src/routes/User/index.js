const express = require('express');
const UserController = require('../../controllers/UserController');

const userRouter = express.Router();

userRouter.get('/user', UserController.getUser);
userRouter.post('/user', UserController.createUser);
userRouter.put('/user', UserController.updateUser);
userRouter.delete('/user', UserController.deleteUser);

module.exports = userRouter;