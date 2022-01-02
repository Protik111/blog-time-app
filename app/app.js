require('dotenv').config('../.env');
const express = require('express');

//error handler middleware export
const { errorHandler, notFoundHandler } = require('./error');

const app = express();

app.use(require('./middleware'));
app.use(require('./routes.js'));
app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;