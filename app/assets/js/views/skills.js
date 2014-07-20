(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    var view = m("div.skills-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      ctrl.imagesList.map(function(img, i) {
        return m("img.physics [src='/img/logo/" + img + ".png']");
      })
    ]);

    return view;
  };

})();
