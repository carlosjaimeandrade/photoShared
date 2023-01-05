const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

require('dotenv').config();
const routes = require('./routes');
const test = require('./config/database');
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());
test.testConnection();

app.use('/api', routes.user);

module.exports = app;