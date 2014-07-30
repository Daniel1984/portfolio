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
      document.querySelector('.tiles').style.overflowY = 'auto';
      document.querySelector('.inner-item.animate').classList.remove('animate');
    };

    this.onItemClick = function(e) {
      e.preventDefault();
      history.pushState(null, null, location.href);
      document.querySelector('.tiles').style.overflowY = 'hidden';
      var module = e.currentTarget.getAttribute('data-module');
      var el = e.currentTarget.querySelector('.inner-item'); 
      m.module(el, modules[module]);
      el.classList.add('animate');
    };

  };

})();
