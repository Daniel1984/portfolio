(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../controllers/about_controller'),

    view: function(ctrl) { return require('../views/about')(ctrl); }

  };

})();
