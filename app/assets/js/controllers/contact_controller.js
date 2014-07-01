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

  };

})();
