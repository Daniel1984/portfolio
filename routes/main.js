var mailer = require(process.cwd() + '/services/mailer');
var ejs = require('ejs');
var fs = require('fs');

var emailTpl = fs.readFileSync(process.cwd() + '/views/emails/contact_view.ejs', 'utf8');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.post('/contact', function(req, res) {
    console.log('hahahahahahahahah------------------------------------------------------->', req.body);
		mailer.sendMail({
			from: 'linksmivakarai@gmail.com', 
    	to: 'daniel.stenger@yahoo.com',
      subject: 'Daniel contact form',
      html: ejs.render(emailTpl, { email_data: req.body })
		});
  });


}
