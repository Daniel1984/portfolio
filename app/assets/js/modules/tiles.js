(function() {
  'use strict';

  module.exports = {
    
    model: function() {},

    view: function(ctrl) { return require('../views/tiles')(ctrl); },

    controller: require('../controllers/tiles_controller')

  };

})(); 
