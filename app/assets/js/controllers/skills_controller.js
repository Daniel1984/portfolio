(function() {
  'use strict';

  var Physics = require('PhysicsJS');

  module.exports = function() {
    var _this = this;

    this.imagesList = [
      'node',
      'angular',
      'backbone',
      'bower',
      'browserify',
      'chai',
      'cordova',
      'grunt',
      'jasmine',
      'mithril',
      'moca',
      'require',
      'html5',
      'css3',
      'gulp'
    ];

    this.isReady = function(el, init, $scope) {
      if(!init) return;
      _this.initPhysics();
    };

    this.initPhysics = function() {

    };

  };
})();

