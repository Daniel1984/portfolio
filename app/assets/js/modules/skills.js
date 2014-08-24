(function() {
  'use strict';

  module.exports = {

    view: function(ctrl) { return require('../views/skills')(ctrl); },

    controller: require('../controllers/skills_controller')

  };

})();
