require('dotenv').config('../.env');
const express = require('express');
const connectDb = require('../db/db');

//error handler middleware export
const { errorHandler, notFoundHandler } = require('./error');

const app = express();

//db conncetion
connectDb();

app.use(require('./middleware'));
app.use(require('./routes.js'));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;