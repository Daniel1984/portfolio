(function() {
  'use strict';
  
  module.exports = function() {

    this.onunload = function() { 
      document.querySelector('.experience').classList.add('fade-out');
    };

    this.isReady = function(el, init, $scope) { 
      setTimeout(function() {
        el.classList.remove('fade-out');
      }, 300); 
    };

  };

})();
