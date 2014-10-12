(function() {
  'use strict';
  
  module.exports = function() {

    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
      document.querySelector('.ui-router.hide-overflow').classList.remove('hide-overflow');
    };

  };

})();
