const express = require('express');

const router = express.Router();
console.log('V1 router loaded');


// patient router
router.use('/patients', require('./patient'));
// doctors router
router.use('/doctors', require('./doctor'));
// reports router
router.use('/reports', require('./report'));

module.exports = router;