(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.row', [
      m('div.header', [
        m('h1', 'Star Slot City'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/ssc.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'The online casino. This is one of the first web based, cross platform products working on desktop, tablet and mobile devices build for UK customers. I was responsible for the front as well as back-end of this app.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://www.starslotcity.com'][target='_blank']", 'http://www.starslotcity.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Require.js'),
            m('span.label.label-danger', 'Jasmine'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'Ruby on Rails'),
            m('span.label.label-danger', 'MongoDB'),
            m('span.label.label-danger', 'Postgresql'),
            m('span.label.label-danger', 'Rspec'),
            m('span.label.label-danger', 'Puppet'),
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
