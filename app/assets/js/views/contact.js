(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.contact.row-fluid", [
      m('div.contact-header', [
        m('h1', 'Contact me'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m('form', [
          m('div.form-group', [
            m('label.name', 'Name'),
            m("input.form-control[type='text'][placeholder='Name'][name='name']",
              { 
                onchange: m.withAttr("value", ctrl.name),
                onkeyup: ctrl.onInputKeyUp
              }  
            )
          ]),
          m('div.form-group', [
            m('label.email', 'Email Address'),
            m("input.form-control[type='email'][placeholder='Email Address'][name='email']",
              { 
                onchange: m.withAttr("value", ctrl.email),
                onkeyup: ctrl.onInputKeyUp
              }  
            )
          ]),
          m('div.form-group', [
            m('label.message', 'Message'),
            m("textarea.form-control[placeholder='Message'][rows='4'][name='message']",
              { 
                onchange: m.withAttr("value", ctrl.email),
                onkeyup: ctrl.onInputKeyUp
              }  
            )
          ]),
          m('div.form-group', [
            m("button.btn.btn-lg.btn-success.pull-left.btn-outline[type='submit']", { onclick: ctrl.submit }, 'Send')
          ])
        ])
      ])
    ]);
  };

})();
