// requiring mongoose ODM to interact with mongoDB

const mongoose = require('mongoose');

// defining Doctor schema

const doctorSchema = new mongoose.Schema({
    email: {
        type: String,
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
    }
}, {
    timestamps: true
});

// creating Doctor model in database

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;