var nodemailer = require('nodemailer');
var config = require('config');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.email.user,
      pass: config.email.pass
    }
});

module.exports.sendMail = function(options, cb) {
  transporter.sendMail(options, function(err, res) {
    cb(err, res);
  });
}
