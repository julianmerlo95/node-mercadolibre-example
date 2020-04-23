const express = require('express');
const showUrl = require('../controller/mercadolibre.controller');

const routes = express.Router();

// Middleware
routes.use(express.json());

// Routes
routes.get('/:categorie', showUrl);


module.exports = routes;
