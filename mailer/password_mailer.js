const nodeMailer = require('../config/nodemailer');
const { getMaxListeners } = require('../models/doctor');
exports.patientPassword = (patient) => {
    // using transporter of nodemail to send mail
    nodeMailer.transporter.sendMail({
       from: 'bhavyasapra96@gmail.com',
       to: patient.email,                                                          
       subject: "Use this Password to check Reports!",
       html: `<h1>${patient.password}</h1>`
    }, (err, info) => {
        if (err){
            console.log('Error in sending mail', err);
            return;
        }
        console.log('Message sent', info);
        return;
    });
}