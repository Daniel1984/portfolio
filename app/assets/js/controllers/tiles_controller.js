(function() {
  'use strict';
  
  module.exports = function() {

    window.onpopstate = function(event) {
      history.go(1);
      document.querySelector('.inner-item.animate').classList.remove('animate');
    };

    this.onItemClick = function(e) {
      history.pushState(null, null, location.href);
      e.currentTarget.querySelector('.inner-item').classList.add('animate');
    };

  };

})();
