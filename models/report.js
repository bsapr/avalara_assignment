// requiring mongoose ODM to interact with mongoDB
const mongoose = require('mongoose');

// defining Doctor schema
const reportSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    patient: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Patient'

    },
   
    doctor: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    }
    
},{ 
    timestamps: true
});
// creating Report model in database
const Report = mongoose.model('Report', reportSchema);
module.exports = Report;