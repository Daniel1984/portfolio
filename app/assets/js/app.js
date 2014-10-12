(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
    var container = document.querySelector('.ui-router');
    m.route(container, '/', {
      '/': require('./modules/tiles'),
      'portfolio/:view': require('./modules/portfolio_item')
    });
  };

})();
