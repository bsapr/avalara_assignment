
const Doctor = require('../../../models/doctor');
const jwt = require('jsonwebtoken');


console.log("In doctor controller js")

module.exports.create = function(req, res){
    return res.json(200, {
        message: "Password is matched"
    });

}
module.exports.create2 = function(req, res){
    console.log("In create function")
    console.log("password ",req.body.password,"  ", req.body.confirm_password);
    if (req.body.password != req.body.confirm_password){
        return res.json(422, {
            message: "Password doesn't match"
        });
    }
    
    // finding if doctor already registered with provided email

    Doctor.findOne({email: req.body.email}, function(err, doctor){
        if(err){ 
            return res.json(422, {
            message: err
            }); 
        }

        if (!doctor){

            // creating new entry in DB for Doctor
            Doctor.create(req.body, function(err, doctor){
                if(err){
                    return res.json(422, {
                        message: "Password doesn't match"
                    });    
                }

                return res.json(200, {
                    message: "You have signed up, login to continue!"
                }); 
            })
        }else{
            return res.json(200, {
                message: "You are already registered, login to continue!"
            }); 
        }

    });
}

// creating JWT for doctor after log-in

module.exports.createSession = async function(req, res){

    try{
        let doctor = await Doctor.findOne({email: req.body.email});

        if (!doctor || doctor.password != req.body.password){
            return res.json(422, {
                message: "Invalid username or password"
            });
        }
        //returning a JWT after successful login
        return res.json(200, {
            message: 'Sign in successful, here is your token, please keep it safe!',
            data:  {
                token: jwt.sign(doctor.toJSON(), 'codeial', {expiresIn:  '100000000'})
            }
        })

    }catch(err){
        console.log('********', err);
        return res.json(500, {
            message: "Internal Server Error"
        });
    }
}