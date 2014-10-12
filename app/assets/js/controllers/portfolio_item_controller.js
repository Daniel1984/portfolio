(function() {
  'use strict';

  module.exports = function() {

    this.fadeOutView = function() {
      document.querySelector('.portfolio-renderer').classList.remove('animate');
      document.querySelector('.ui-router.hide-overflow').classList.remove('hide-overflow');
    };

  };

})();
