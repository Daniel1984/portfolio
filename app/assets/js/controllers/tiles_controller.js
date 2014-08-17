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
    var _this = this;
    _this.item_active = false;

    window.onpopstate = function(event) { 
      _this.item_active = false;
      history.go(1);
      document.querySelector('.tiles').style.overflowY = 'auto';
      document.querySelector('.inner-item.animate').classList.remove('animate');
    };

    this.onItemClick = function(e) {
      if(_this.item_active) {
        console.log('if');
        return;
      } else {
        console.log('else');
        history.pushState(null, null, location.href);
        document.querySelector('.tiles').style.overflowY = 'hidden';
        var module = e.currentTarget.getAttribute('data-module');
        var el = e.currentTarget.querySelector('.inner-item'); 
        m.module(el, modules[module]);
        el.classList.add('animate');
        _this.item_active = true;
      }
    };

  };

})();
