const express = require('express');
const controllers = require('./controllers/recursos');

const routes = express.Router();

routes.get('/', controllers.raiz);
routes.get('/r2', controllers.raiz);
routes.get('/r3', controllers.raiz);
routes.get('/r4', controllers.raiz);
routes.get('/r5', controllers.raiz);

module.exports = routes;