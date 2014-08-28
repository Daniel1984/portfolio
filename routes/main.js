var contact_ctrl = require(process.cwd() + '/controllers/contact_ctrl');

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.post('/contact', contact_ctrl.sendMail);

}
