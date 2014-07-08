(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    var view = m("div.skills.row-fluid", [
      m('div.logo-container', [
        ctrl.imagesList.map(function(img, i) {
          return m("img.physics[src='/img/logo/" + img + ".png']");
        })
      ])
    ]);

    return view;
  };

})();
