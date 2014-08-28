var nodeMailer = require('nodemailer');
var config = require('config');

var smtpTransportr = nodeMailer.createTransport("SMTP", { service: config.email.service }, { 
										 auth: {
    									 user: config.email.user,
    									 pass: config.email.pass
										 }})

module.exports.sendMail = function(options) {
  smtpTransportr.sendMail(mailOptions, function(err, res) {
    console.log("error --->>>", err);
    console.log("response --->>>>", res);
  });
}
