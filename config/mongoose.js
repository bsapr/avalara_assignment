const mongoose = require('mongoose');


// using monggose ODM to interact with mongodb

mongoose.connect('mongodb://localhost/covidAPI');

const db = mongoose.connection;
// connecting to mongodb

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;