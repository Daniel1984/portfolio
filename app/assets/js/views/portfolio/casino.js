(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', '3D Room'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/casino.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Yet another Flash 3D example')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='/img/3d/index.html'][target='_blank']", 'http://www.3d.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Flash'),
            m('span.label.label-danger', 'ActionScript 3.0'),
            m('span.label.label-danger', 'HTML5')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();
