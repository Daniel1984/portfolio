(function() {
  'use strict';

  module.exports = {
    
    view: function(ctrl) { return require('../views/tiles')(ctrl); },

    controller: require('../controllers/tiles_controller')

  };

})(); 
