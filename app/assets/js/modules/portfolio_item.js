(function() {
  'use strict';
  
  var m = require('mithril');

  module.exports = {

    model: function() {},

    controller: require('../controllers/portfolio_item_controller'),

    view: function(ctrl) { 
      return require('../views/portfolio/' + m.route.param('view'))(ctrl); 
    }

  };

})();
