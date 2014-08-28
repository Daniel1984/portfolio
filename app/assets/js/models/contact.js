(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function() {
    var _this = this;

    this.name = m.prop('');
    this.email = m.prop('');
    this.message = m.prop('');
    
    this.sendMail = function() {
      var data = m.request({
        method: 'POST',
        url: '/contact',
        data: {
          email: _this.email(),
          name: _this.name(),
          message: _this.message()
        }
      });
      return data;
    };

    this.resetAttributes = function() {
      this.email('');
      this.name('');
      this.message('');
    };

  };

})();
