(function() {
  'use strict';

  var m = require('mithril');

  var navbar = {};

  navbar.controller = function() {

  };

  navbar.view = function(ctrl) {
    return require('../views/navbar')(ctrl);
  };

  module.exports = navbar;

})();
