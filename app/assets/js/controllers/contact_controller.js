(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function() {
    var _this = this;

    this.name = m.prop('');
    this.email = m.prop('');
    this.message = m.prop('');
    
    this.hideView = function() {
      window.history.go(0);
    };

    this.submit = function(e) {
      e.preventDefault();
      if(_this.email() === '' || _this.message() === '') {
        document.querySelector('.bg-danger').classList.remove('hide');
      } else {
        m.request({
          method: 'POST',
          url: '/contact',
          data: {
            email: _this.email(),
            name: _this.name(),
            message: _this.message()
          }
        });
      }
    };

    this.onInputKeyUp = function(e) {
      var activeEl = document.querySelector('label.active');
      if(activeEl) activeEl.classList.remove('active');
      e.currentTarget.querySelector('label').classList.add('active');
    };

  };

})();
