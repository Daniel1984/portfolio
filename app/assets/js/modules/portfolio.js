(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return require('../views/portfolio')(ctrl); }

  };

})();
