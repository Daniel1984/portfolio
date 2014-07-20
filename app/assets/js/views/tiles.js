(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    return m("div.tiles", [
      m('div.tile-item.about', { style: { background: '#84ffff' }, onclick: ctrl.onItemClick }, [
        m('div.header', [
          m("img[src='/img/me.png']")
        ]),
        m('div.body', [
          m('h2', 'Daniel Stenger'),
          m('h2', 'Javascript developer'),
        ]),
        m('div.inner-item')
      ]),

      m('div.tile-item.skills', { style: { background: '#dda0dd' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-magic'),
          m('h2', 'Skills')
        ]),
        m('div.inner-item')
      ]),

      m('div.tile-item.portfolio', { style: { background: '#ffff8d' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-suitcase'),
          m('h2', 'Portfolio')
        ]),
        m('div.inner-item')
      ]),

      m('div.tile-item.experience', { style: { background: '#ff8a80' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-clock-o'),
          m('h2', 'Experience')
        ]),
        m('div.inner-item')
      ]),

      m('div.tile-item.contact', { style: { background: '#b388ff' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-envelope'),
          m('h2', 'Contact')
        ]),
        m('div.inner-item')
      ])

    ]);
  };

})();
