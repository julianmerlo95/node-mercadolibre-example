const express = require('express');
const routes = express.Router();
const routeMercadolibre = require('./mercadolibre.routes');

// Middleware
routes.use(express.json());

routes.use('/categories', routeMercadolibre);

module.exports = routes;