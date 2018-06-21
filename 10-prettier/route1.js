const express = require('express');
const app = express.Router();

app.get('/hi', (request, response) => {
  // Change this message
  response.send('Hello world!');
});

module.exports = app;
