var mailer = require(process.cwd() + '/services/mailer');
var ejs = require('ejs');
var fs = require('fs');

var emailTpl = fs.readFileSync(process.cwd() + '/views/emails/contact_view.ejs', 'utf8');

module.exports.sendMail = function(req, res) {
  mailer.sendMail({
    from: 'linksmivakarai@gmail.com', 
    to: 'daniel.stenger@yahoo.com',
    subject: 'Daniel contact form',
    html: ejs.render(emailTpl, { email_data: req.body })
  }, function(err, info) {
    if(err) return res.json({ message: 'Error' }, 422);
    res.json({ message: 'Ok' }, 200);
  });
}
