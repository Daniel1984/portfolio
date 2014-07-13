(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.row.fade-out', { config: ctrl.isReady }, [
      m('div.header', [
        m('h1', 'Physitrack'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/pt.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'App build for home exercise prescription. Whole system consists of 5 different types of app: admin app, app for doctors, mobile web app for doctors, app for patiens and its mobile web app version. I was responsible mainly for the front-end logic including desktop and mobile versions. More info can be found on site.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://www.physitrack.com'][target='_blank']", 'http://www.physitrack.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Marionette.js'),
            m('span.label.label-danger', 'Sass'),
            m('span.label.label-danger', 'Bootstrap'),
            m('span.label.label-danger', 'Ruby on Rails'),
            m('span.label.label-danger', 'Msql'),
            m('span.label.label-danger', 'Capistrano'),
            m('span.label.label-danger', 'Jenkins'),
            m('span.label.label-danger', 'Coffeescript'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ])
    ]);
  };

})();
