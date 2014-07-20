(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.portfolio-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.portfolio-header', [
        m('h1', 'Portfolio'),
        m('hr.star-light')
      ]),
      ctrl.portfolio_items.map(function(item, i) {
        return m('div.col-sm-4.portfolio-item', [
          m("a.portfolio-link[href='/#/portfolio/" + item + "']", [
            m('div.caption', [
              m('div.caption-content', [
                m('i.fa.fa-search-plus.fa-3x')
              ])
            ]),
            m("img[src='/img/portfolio/" + item + ".png']")
          ])
        ]);
      })
    ]);
  };

})();
