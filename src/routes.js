const express = require('express');
const controllers = require('./controllers/recuros');

const routes = express.Router();

routes.get('/', controllers.raiz);

module.exports = routes;