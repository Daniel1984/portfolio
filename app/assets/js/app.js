(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
    m.route(document.querySelector('.ui-router'), '/', {
      '/'          : require('./modules/intro'),
      '/portfolio' : require('./modules/portfolio'),
      '/skills'    : require('./modules/skills'),
      '/experience': require('./modules/experience'),
      '/contact'   : require('./modules/contact')
    });
    
    m.module(document.querySelector('.navbar-section'), require('./modules/navbar'));
  };

})();
