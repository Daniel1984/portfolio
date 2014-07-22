(function() {
  'use strict';

  module.exports = function() {
    
    this.hideView = function() {
      window.history.go(0);
    };

  };

})();
