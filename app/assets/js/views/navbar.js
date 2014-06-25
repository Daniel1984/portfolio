(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('nav.navbar.navbar-default.navbar-fixed-top', [
      m('div.container', [
        m('div.navbar-header.page-scroll', [
          m("a.navbar-brand[href='/#/']", 'Daniel Stenger')
        ]),
        m('div.navbar-header.page-scroll', [
          m("div.navbar-collapse.collapse.in", [
            m('ul.nav.navbar-nav.navbar-right', [
              m('li.page-scroll', [
                m("a[href='/#/portfolio']", 'Portfolio')
              ]),
              m('li.page-scroll', [
                m("a[href='/#/about']", 'About')
              ]),
              m('li.page-scroll', [
                m("a[href='/#/contact']", 'Contact')
              ])
            ])
          ])
        ])
      ])
    ]);
  };

})();
