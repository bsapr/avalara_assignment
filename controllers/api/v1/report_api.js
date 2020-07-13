const Doctor = require('../../../models/doctor');
const Patient = require('../../../models/patient');
const Report = require('../../../models/report');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


module.exports.reportByStatus = async function(req, res){


    let reports = await Report.find({status: req.params.status})
        .sort('-createdAt')
        .populate('patient', 'name mobile')
        .populate('doctor', 'name email');

    return res.json(200, {
        message: "List of Reports of a patient for the given status",
        reports: reports
    })
}
