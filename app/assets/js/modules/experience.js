(function() {
  'use strict'; 

  module.exports = {
    
    controller: require('../controllers/experience_controller'),

    view: function(ctrl) { return require('../views/experience')(ctrl); }

  };

})();
