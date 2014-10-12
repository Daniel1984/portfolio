(function() {
  'use strict';

  var m = require('mithril');
  var Model = require('../models/contact');

  module.exports = function() {
    var _this = this;

    this.model = new Model();
    
    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
    };

    this.submit = function(e) {
      e.preventDefault();
      if(_this.model.email() === '' || _this.model.message() === '') {
        document.querySelector('.bg-danger').classList.remove('hide');
      } else {
        var el = e.currentTarget;
        el.setAttribute('disabled', true);
        el.innerHTML = 'Sending...';
        _this.model.sendMail().then(function() {
          el.removeAttribute('disabled');
          el.innerHTML = 'Send';
          _this.model.resetAttributes();
        }, function(err) {
          console.log('error -> ', err); 
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
