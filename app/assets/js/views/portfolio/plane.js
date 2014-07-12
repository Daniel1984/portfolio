(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.row', [
      m('div.header', [
        m('h1', 'Flappy plane'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/plane.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'My first game build with canvas. Automated development process with help of gulp and browserify.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://plane-flappy.herokuapp.com/'][target='_blank']", 'http://www.flappyplane.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
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
      ])
    ]);
  };

})();
