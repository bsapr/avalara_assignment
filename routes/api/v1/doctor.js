const express = require('express');

const router = express.Router();
// requiring doctors_registeration controller action
const doctorApi = require("../../../controllers/api/v1/doctor_register");

console.log("In doctor routes.js")
console.log(doctorApi);

// registering a doctor
router.post('/register', doctorApi.create2);

// creating-session based on JWT on log-in
router.post('/login', doctorApi.createSession);



//router.get('/', postsApi.index);
//router.delete('/:id', passport.authenticate('jwt', {session: false}), postsApi.destroy);



module.exports = router;