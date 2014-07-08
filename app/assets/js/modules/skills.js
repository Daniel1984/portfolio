(function() {
  'use strict';

  module.exports = {

    model: function() {},

    view: function(ctrl) { return require('../views/skills')(ctrl); },

    controller: require('../controllers/skills_controller')

  };

})();
