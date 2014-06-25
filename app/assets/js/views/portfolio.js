(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div", [
      m("input"),
      m("button", "Add"),
      m("table", [
        m("tr", [
          m("td", [
            m("input[type=checkbox]")
          ]),
          m("td", "task description"),
        ])
      ])
    ]);
  };

})();
