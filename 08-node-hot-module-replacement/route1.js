const express = require('express');
const app = express.Router();

app.get('/hi', (request, response) => {
    response.send('Hello world!'); // Change this message, save this file and then manually refresh your webpage
});

module.exports = app;