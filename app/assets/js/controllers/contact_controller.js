(function() {
  'use strict';

  module.exports = function() {
    var _this = this;

    this.name = m.prop('');
    this.email = m.prop('');
    this.message = m.prop('');
    
    this.submit = function(e) {
      e.preventDefault();
      console.log('submitting - ', _this.name());
    };

    this.onInputKeyUp = function(e) {
      var elName = e.currentTarget.getAttribute('name') ;
      var elLabel = document.querySelector('label.' + elName);
      if(e.currentTarget.value !== '') {
        elLabel.classList.add('active');
      } else {
        elLabel.classList.remove('active');
      }
    };

    this.onunload = function() { 
      document.querySelector('.contact').classList.add('fade-out');
    };

    this.isReady = function(el, init, $scope) { 
      setTimeout(function() {
        el.classList.remove('fade-out');
      }, 300); 
    };

  };

})();
