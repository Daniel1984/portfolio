(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.about.container", [
      m('div.abuot-header', [
        m('h1', 'About'),
        m('hr.star-light')
      ])
    ]);
  };

})();
