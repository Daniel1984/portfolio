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

    this.onItemClick = function(e) {
      document.querySelector('.ui-router').classList.add('hide-overflow');
      var module = e.currentTarget.getAttribute('data-module');
      var el = document.querySelector('.tile-item-renderer'); 
      m.module(el, modules[module]);
      el.classList.add('animate');
    };

  };

})();
