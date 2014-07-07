(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    return m("div.skills.row-fluid", [
      m('div.logo-container', [
        m("img.physics[src='/img/logo/node.png']"),
        m("img.physics[src='/img/logo/angular.png']"),
        m("img.physics[src='/img/logo/backbone.png']"),
        m("img.physics[src='/img/logo/bower.png']"),
        m("img.physics[src='/img/logo/browserify.png']"),
        m("img.physics[src='/img/logo/chai.png']"),
        m("img.physics[src='/img/logo/cordova.png']"),
        m("img.physics[src='/img/logo/grunt.png']"),
        m("img.physics[src='/img/logo/jasmine.png']"),
        m("img.physics[src='/img/logo/mithril.jpg']"),
        m("img.physics[src='/img/logo/moca.png']"),
        m("img.physics[src='/img/logo/require.png']"),
        m("img.physics[src='/img/logo/html5.png']"),
        m("img.physics[src='/img/logo/gulp.png']"),
        m("img.physics[src='/img/logo/css3.png']")
      ])
    ]);
  };

})();
