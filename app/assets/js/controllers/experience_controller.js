(function() {
  'use strict';
  
  module.exports = function() {

    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
    };

  };

})();
