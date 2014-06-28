(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.intro.container", [
      m('div.pic.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-sm-offset-4.col-md-offset-4.col-lg-offset-4', [
        m("img[src='/img/me.png']")
      ]),
      m('div.intro-text', [
        m('h1', 'Javascript RockStar Developer')
      ]),
      m('hr.star-light'),
      m("a.btn.btn-lg.btn-outline[href='/#/portfolio']", 'Portfolio')
    ]);
  };

})();
