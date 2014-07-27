(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/slot')(ctrl); }

  };

})();
