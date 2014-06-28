(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.contact.row-fluid", [
      m('div.abuot-header', [
        m('h1', 'Contact me'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m('form', [
          m('div.form-group', [
            m('label', 'Name'),
            m("input.form-control[type='text'] [placeholder='Name']")
          ]),
          m('div.form-group', [
            m('label', 'Email Address'),
            m("input.form-control[type='email'] [placeholder='Email Address']")
          ]),
          m('div.form-group', [
            m('label', 'Message'),
            m("textarea.form-control [placeholder='Message'] [rows='4']")
          ]),
          m('div.form-group', [
            m("button.btn.btn-lg.btn-success.pull-left [type='submit']", 'Send')
          ])
        ])
      ])
    ]);
  };

})();
