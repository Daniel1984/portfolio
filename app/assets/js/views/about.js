(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.intro-p.row-fluid", [
      m('div.pic.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-sm-offset-4.col-md-offset-4.col-lg-offset-4', [
        m("img[src='/img/me.png']")
      ]),
      m('div.intro-text', [
        m('h1', 'Javascript Developer')
      ]),
      m('hr.star-light'),
      m('div.col-xs-12.col-sm-6.col-md-6.col-lg-6.col-sm-offset-3.col-md-offset-3.col-lg-offset-3', [
        m('p', 'Welcome to my online portfolio. I\'m a software developer currently based in Lithuania. I specialise in developing fast, web based applications such as SPA (single page applications) and hybrid mobile applications using cutting-edge technologies such as Node.js, Angular, Backbone, Mithril, Cordova and more! Contact me if you are looking for someone to build a project from scratch or help out with existing project.')
      ]),
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();
