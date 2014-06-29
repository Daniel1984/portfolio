(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.experience.row-fluid", [
      m('h1', 'Experience'),
      m('hr.star-light'),
      m('div.experience-content', [
        m('blockquote', [
          m('h3', 'Front-end developer at Same System (Vilnius Lithuania)'),
          m('p', 'Porting native mobile app to cordova. Using Backbone.js, vanilla js, CSS3, HTML5, unit tests with mocha.js, chai.js and karma test runner, automating develoment process with gulp.js.'),
          m('footer', '2014 Feb - now')
        ]),

        m('blockquote', [
          m('h3', 'Front-end software developer at NECOLT (Vilnius, Lithuania)'),
          m('p', 'Building complex web apps with Ruby On Rails, Backbone.js, HTML5, CSS3. Publicly accessible project: '),
          m("a[href='https://physitrack.com']", 'https://physitrack.com'),
          m('footer', '2013 April - 2014 February')
        ])
      ])
    ]);
  };

})();
