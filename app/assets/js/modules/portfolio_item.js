(function() {
  'use strict';
  
  var m = require('mithril');
  var views = {
        pt: require('../views/portfolio/pt'),
        casino: require('../views/portfolio/casino'),
        orbit: require('../views/portfolio/orbit'),
        plane: require('../views/portfolio/plane'),
        slot: require('../views/portfolio/slot'),
        ss: require('../views/portfolio/ss'),
        ssc: require('../views/portfolio/ssc')
      };

  module.exports = {

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return views[m.route.param('view')](ctrl); }

  };

})();
