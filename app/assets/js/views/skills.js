(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.skills.container", [
      m('div.abuot-header', [
        m('h1', 'Skills'),
        m('hr.star-light')
      ])
    ]);
  };

})();
