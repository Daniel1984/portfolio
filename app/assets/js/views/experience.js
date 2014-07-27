(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.experience-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('h1', 'Experience'),
      m('hr.star-light'),
      m('div.experience-content', [

        m('blockquote', [
          m('h3', 'Front-end developer at Same System (Vilnius, Lithuania)'),
          m('p', 'Porting native mobile app to cordova. Using Backbone.js, CSS3, HTML5, unit tests with mocha.js, chai.js and karma test runner, automating develoment process with gulp.js.'),
          m('footer', '2014 Feb - now')
        ]),

        m('blockquote', [
          m('h3', 'Front-end software developer at NECOLT (Vilnius, Lithuania)'),
          m('p', [
            'Building complex, interactive web apps with Ruby On Rails, Backbone.js, HTML5, CSS3. Publicly accessible project can be found: ',
            m("a[href='https://physitrack.com'][target='_blank']", 'here'),
          ]),
          m('footer', '2013 April - 2014 February')
        ]),

        m('blockquote', [
          m('h3', 'Full stack software developer at Little Star Media Ltd. (London, UK)'),
          m('p', [
            'Building large scale SOA architecture using Mongodb and Postgresql for data storage, Ruby On Rails for back-end services management, Node.js as orchestra layer to communicate between services and Backbone.js for front-end code (JavaScript/coffeescript) organization. Publicly accessible project can be found: ',
            m("a[href='https://www.starslotcity.com'][target='_blank']", 'here'),
          ]),
          m('footer', '2010 August - 2013 April')
        ]),

        m('blockquote', [
          m('h3', 'Freelance Flash, ActionScript3 developer.'),
          m('p', [
            'Flash animations, banner advertisement, web apps, games etc. Some samples can be seen: ',
            m("a[href='https://www.youtube.com/watch?v=D1hfwQNDDns'][target='_blank']", 'here'),
          ]),
          m('footer', '2008 - 2010')
        ]),

        m('div.close-btn', { onclick: ctrl.hideView },  [
          m('i.fa.fa-times-circle-o')
        ])
        
      ])
    ]);
  };

})();
