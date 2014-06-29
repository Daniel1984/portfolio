(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('nav.navbar.navbar-default.navbar-fixed-top', [
      m('div.container', [
        m('div.navbar-header', [
          m("a.navbar-brand[href='/#/']", 'Daniel Stenger')
        ]),
        m("div.collapse.navbar-collapse", [
          m('ul.nav.navbar-nav.navbar-right', [
            m('li.page-scroll', [
              m("a[href='/#/portfolio']", 'Portfolio')
            ]),
            m('li.page-scroll', [
              m("a[href='/#/skills']", 'Skills')
            ]),
            m('li.page-scroll', [
              m("a[href='/#/experience']", 'Experience')
            ]),
            m('li.page-scroll', [
              m("a[href='/#/contact']", 'Contact')
            ])
          ])
        ])
      ])
    ]);
  };

})();
