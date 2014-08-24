(function() {
  'use strict'; 

  module.exports = {
    
    controller: require('../controllers/contact_controller'),

    view: function(ctrl) { return require('../views/contact')(ctrl); }

  };

})();
