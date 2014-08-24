(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) { return m("div.skills-p.row-fluid.fade-out", [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m('h1', 'Skills'),
        m('hr.star-light'),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '98%' }}, [
            m('span', 'Backbone 98%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '95%' }}, [
            m('span', 'Javascript 95%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '95%' }}, [
            m('span', 'HTML5 95%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '95%' }}, [
            m('span', 'MithrilJS 95%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '92%' }}, [
            m('span', 'CSS3 92%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '90%' }}, [
            m('span', 'Mocha 90%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '85%' }}, [
            m('span', 'AngularJS 85%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '75%' }}, [
            m('span', 'NodeJS 75%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '70%' }}, [
            m('span', 'Mongo 70%')
          ])
        ]),
        m('div.progress', [
          m('div.progress-bar.progress-bar-success', { style : { width: '65%' }}, [
            m('span', 'Ruby 65%')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();
