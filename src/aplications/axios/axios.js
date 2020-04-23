const axios = require('axios');
require('dotenv').config()

const URI = process.env.URL_MERCADOLIBRE;

const instance = axios.create({
  baseURL: URI
})

module.exports = instance;