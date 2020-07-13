const express = require('express');

const router = express.Router();


// router for vi

router.use('/v1', require('./v1'));

console.log('API router loaded');
module.exports = router;