(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    var view = m("div.skills-p.row-fluid.fade-out", { config: ctrl.isReady }, [
//      ctrl.imagesList.map(function(img, i) {
//        return m("img.physics [src='/img/logo/" + img + ".png']");
//      })
      m('div.col-sm-6.col-lg-6.col-xs-12', [
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '90%' }}, [
            m('span', 'Javascript 90%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '70%' }}, [
            m('span', 'NodeJS 70%')
          ])
        ])
      ])
    ]);

    return view;
  };

})();
