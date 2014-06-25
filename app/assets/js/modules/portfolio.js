(function() {
  'use strict';

  var m = require('mithril');

  var portfolio = {};

  portfolio.controller = function() {

  };

  portfolio.view = function(ctrl) {
    return require('../views/portfolio')(ctrl);
  };

  module.exports = portfolio;
})();
