// requiring mongoose ODM to interact with mongoDB
const mongoose = require('mongoose');

// defining Patient schema
const patientSchema = new mongoose.Schema({
    mobile: {
        type: String ,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// creating Patient model in database
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;