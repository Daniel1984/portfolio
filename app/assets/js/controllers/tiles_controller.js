(function() {
  'use strict';
  
  var modules = {
    about: require('../modules/about'),
    portfolio: require('../modules/portfolio'),
    skills: require('../modules/skills'),
    contact: require('../modules/contact'),
    experience: require('../modules/experience')
  };
  var m = require('mithril');

  module.exports = function() {

    window.onpopstate = function(event) {
      history.go(1);
      document.querySelector('.inner-item.animate').classList.remove('animate');
    };

    this.onItemClick = function(e) {
      history.pushState(null, null, location.href);
      var el = e.currentTarget.querySelector('.inner-item');
      el.classList.add('animate');
      m.module(el, modules[e.currentTarget.getAttribute('data-module')]);
    };

  };

})();
