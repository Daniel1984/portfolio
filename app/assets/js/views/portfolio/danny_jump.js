(function() {
  'use strict';

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Danny Jump'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/danny_jump.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Yet another result of my habby. HTML5 game build with pixi.js. It\'s not 100% finished, so don\' judge too fast ;)')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='https://min60fps.herokuapp.com/jj/'][target='_blank']", 'http://www.flappyplane.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Mithril.js'),
            m('span.label.label-danger', 'Browserify'),
            m('span.label.label-danger', 'Pixi.js'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'MongoDB'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'LESS'),
            m('span.label.label-danger', 'HTML5'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();
