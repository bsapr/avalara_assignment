const express = require('express');

const router = express.Router();
const passport = require('passport');

const reportAPI = require("../../../controllers/api/v1/report_api");

console.log("In patient routes.js")

// doctor can check reports on status basis after JWT is verified
router.get('/:status',passport.authenticate('jwt', {session: false}),reportAPI.reportByStatus )


module.exports = router;