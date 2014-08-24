(function() {
  'use strict';

  module.exports = {

    controller: require('../controllers/about_controller'),

    view: function(ctrl) { return require('../views/about')(ctrl); }

  };

})();
