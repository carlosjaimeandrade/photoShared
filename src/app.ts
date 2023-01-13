/*!
 * Copyright(c) 2023 Antonio Edinadson
 * Copyright(c) 2023 Carlos Jaime de Andrade Junior
 * MIT Licensed
 */

import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
import routes from './routes';
import test from './config/database';
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
test.testConnection();

//table imports
import './Models/User';
import './Models/Album';
import './Models/Photo';
import './Models/Transaction';

app.use('/api', routes.user);
app.use('/api', routes.transaction);
app.use('/api', routes.album);

export default app;