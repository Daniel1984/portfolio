(function() {
  'use strict';

  module.exports = function() {
    this.portfolio_items = ['ssc','pt','ss','plane','slot','orbit','casino'];

    this.onunload = function() { 
      document.querySelector('.portfolio-item-inner').classList.add('fade-out');
    };

    this.isReady = function(el, init, $scope) { 
      setTimeout(function() {
        el.classList.remove('fade-out');
      }, 300); 
    };

  };

})();
