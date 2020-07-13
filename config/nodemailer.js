// requiring nodemailer to send mail

const nodemailer = require("nodemailer");
// creating nodemailer transporter to send mail using smtp service

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'bhavyasapra96@gmail.com',
        pass: '123'
    }
});
module.exports = {
    transporter: transporter
}