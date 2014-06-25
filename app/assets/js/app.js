(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
//    m.route(document.querySelector('.ui-router'), '/', {
//      '/': require('./modules/main'),
//    });
    
    m.module(document.querySelector('.navbar-section'), require('./modules/navbar'));
    m.module(document.querySelector('.portfolio-section'), require('./modules/portfolio'));
  };

})();
