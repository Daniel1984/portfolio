(function() {
  'use strict'; 

  module.exports = {
    
    model: function() {},

    controller: require('../controllers/experience_controller'),

    view: function(ctrl) { return require('../views/experience')(ctrl); }

  };

})();
