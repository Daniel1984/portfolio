(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Same System'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/ss.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Shop administration application. Porting existing mobile app into cordova using latest HTML5, CSS3 and javascript features.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='https://www.youtube.com/watch?v=ovYsEs4DoQc'][target='_blank']", 'http://samesystem.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Cordova'),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Browserify'),
            m('span.label.label-danger', 'Mocha'),
            m('span.label.label-danger', 'Chai'),
            m('span.label.label-danger', 'Karma'),
            m('span.label.label-danger', 'Bootstrap'),
            m('span.label.label-danger', 'Gulp'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'LESS'),
            m('span.label.label-danger', 'HTML5'),
            m('span.label.label-danger', 'CSS3'),
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
