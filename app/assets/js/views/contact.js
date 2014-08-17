(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.contact-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.contact-header', [
        m('h1', 'Contact me'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m('p.bg-danger.hide', 'Email Address and Message are required fields'),
        m('form', [
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Name'),
            m("input.form-control[type='text'][placeholder='Name'][name='name']",
              { onchange: m.withAttr("value", ctrl.name), value: ctrl.name() }  
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Email Address'),
            m("input.form-control[type='email'][placeholder='Email Address'][name='email']",
              { onchange: m.withAttr("value", ctrl.email), value: ctrl.email() }
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Message'),
            m("textarea.form-control[placeholder='Message'][rows='4'][name='message']",
              { onchange: m.withAttr("value", ctrl.message), value: ctrl.message() }
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
