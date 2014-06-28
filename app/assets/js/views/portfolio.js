(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.portfolio.container", [
      m('div.abuot-header', [
        m('h1', 'Portfolio'),
        m('hr.star-light')
      ])
    ]);
  };

})();
