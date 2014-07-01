(function() {
  'use strict'; 

  module.exports = {
    
    model: function() {},

    controller: require('../controllers/contact_controller'),

    view: function(ctrl) { return require('../views/contact')(ctrl); }

  };

})();
