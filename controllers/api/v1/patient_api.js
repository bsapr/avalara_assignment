const Doctor = require('../../../models/doctor');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const passwordMailer=require('../../../mailer/password_mailer');
// var TMClient = require('textmagic-rest-client');

// registering a patient

module.exports.create = function(req, res){
    console.log("In patient function and doctor id", req.user );
    // Checking if patient already registered or not

    Patient.findOne({mobile: req.body.mobile}, function(err, patient){
        if(err){ 
            return res.json(422, {
            message: err
            }); 
        }
         // registering a new patient after generating random password

        var randomPassword = crypto.randomBytes(20).toString('hex');
         
        if (!patient){
            Patient.create({ mobile : req.body.mobile, name:req.body.name, password : randomPassword ,email:req.body.email}, function(err, patient){
                if(err){
                    return res.json(422, {
                        message: err
                    });    
                }
                passwordMailer.patientPassword(patient);
                return res.json(200, {
                    message: "Patient is registered successfully",
                    data: {id:patient.id, name :patient.name, mobile:patient.mobile}
                }); 
            })
        }else{
            return res.json(200, {
                message: "Patient is already registered."
            }); 
        }

    });
}

// creating a report

module.exports.createReport = function(req, res){
    console.log("In patient function req body" , req.body);

    console.log(" req user" , req.user);

    console.log("req params" , req.params);


    Patient.findById(req.params.id, function(err, patient){
        if(err){ 
            return res.json(422, {
            message: err
            }); 
        }

        if (patient){
            Report.create({ comments : req.body.comments, patient:req.params.id, status : req.body.status, doctor:req.user._id }, function(err,report){
                if(err){
                    return res.json(422, {
                        message: err
                    });    
                }

                return res.json(200, {
                    message: "Report is created successfully",
                    data: report
                }); 
            })
        }else{
            return res.json(422, {
                message: "Patient is not registered."
            }); 
        }

    });
}


// patient can check all his/her reports

module.exports.allReports = async function(req, res){

     // finding a patient
    
    let patient = await Patient.findById(req.params.id);
    if(patient.password==req.body.password)
    {
        let reports = await Report.find({patient: req.params.id})
        // .sort('-createdAt')
        .populate('patient', 'name mobile')
        .populate('doctor', 'name email');

        return res.json(200, {
            message: "List of Reports of a patient",
            reports: reports
        })
    }
    else
    {   
        return res.json(422, {
            message: "You are unauthorized to access this report."
        });
    }
    
}


console.log("In patient controller js");