
module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index');
  });

  app.post('/contact', function(req, res) {
    console.log('hahahahahahahahah------------------------------------------------------->', req.body);
  });

}
