const express = require('express');
const router = express.Router();
const hiRoute = require('./hi-route');

hiRoute(router);

module.exports = router;
