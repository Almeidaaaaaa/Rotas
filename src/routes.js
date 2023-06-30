const express = require('express');
const controllers = require('./controllers/recuros');

const routes = express.Router();

routes.get('/', controllers.raiz);
routes.get('rota2', controllers.raiz);
routes.get('rota3', controllers.raiz);
routes.get('rota4', controllers.raiz);
routes.get('rota5', controllers.raiz);

module.exports = routes;