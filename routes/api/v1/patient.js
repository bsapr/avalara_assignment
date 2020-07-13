const express = require('express');

const router = express.Router();
const passport = require('passport');

//importing patients_api controller class
const patientApi = require("../../../controllers/api/v1/patient_api");

console.log("In patient routes.js")

console.log("patientApi", patientApi.allReports );

// doctor can register a patient once JWT gets verified  
router.post('/register', passport.authenticate('jwt', {session: false}), patientApi.create);

// doctor can create a patient report once JWT gets verified 
router.post('/:id/create_report', passport.authenticate('jwt', {session: false}), patientApi.createReport);

// patient can check his/her reports on providing right credentials
router.post('/:id/all_reports',patientApi.allReports )



module.exports = router;