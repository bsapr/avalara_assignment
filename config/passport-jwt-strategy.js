const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../models/doctor');

// defining secret Key for decrypting JWT

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}

// verifying the JWT and setting user in req


passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, doctor){
        if (err){console.log('Error in finding user from JWT'); return;}

        if (doctor){
            return done(null, doctor);
        }else{
            return done(null, false);
        }
    })

}));

module.exports = passport;