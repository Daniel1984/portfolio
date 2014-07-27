(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
    m.route(document.querySelector('.ui-router'), '/', {
      '/': require('./modules/tiles'),
      'portfolio/:view': require('./modules/portfolio_item')
    });
  };

})();
