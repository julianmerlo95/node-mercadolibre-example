const express = require('express');
const app = express();
const routes = require('./aplications/routes/index');
// const routes = require('./routes/index');

// Middleware
app.use(express.json());

// Routes
app.use('/', routes);


app.listen(process.env.PORT || 3000, (req, res) => {
  console.log('Port running in 3000');

})