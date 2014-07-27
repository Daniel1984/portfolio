(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.portfolio-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.portfolio-header', [
        m('h1', 'Portfolio'),
        m('hr.star-light')
      ]),
      ctrl.portfolio_items.map(function(item, i) {
        return m('div.col-sm-4.portfolio-item', [
          m("a.portfolio-link[href='#'][data-module='" + item + "']", { onclick: ctrl.renderPortfolioItem }, [
            m('div.caption', [
              m('div.caption-content', [
                m('i.fa.fa-search-plus.fa-3x')
              ])
            ]),
            m("img[src='/img/portfolio/" + item + ".png']")
          ])
        ]);
      }),
      m('div.portfolio-renderer'),
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();
