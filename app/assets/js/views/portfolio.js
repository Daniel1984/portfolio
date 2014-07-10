(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.portfolio.row-fluid", [
      m('div.portfolio-header', [
        m('h1', 'Portfolio'),
        m('hr.star-light')
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/star_slot_city']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/ssc.png']")
        ])
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/pt']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/pt.png']")
        ])
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/ss']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/ss.png']")
        ])
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/ss']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/plane.png']")
        ])
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/ss']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/slot.png']")
        ])
      ]),
      m('div.col-sm-4.portfolio-item', [
        m("a.portfolio-link[href='/#/ss']", [
          m('div.caption', [
            m('div.caption-content', [
              m('i.fa.fa-search-plus.fa-3x')
            ])
          ]),
          m("img[src='/img/portfolio/orbit.png']")
        ])
      ])
    ]);
  };

})();
