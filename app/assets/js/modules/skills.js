(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../controllers/skills_controller'),

    view: function(ctrl) { return require('../views/skills')(ctrl); }

  };

})();
