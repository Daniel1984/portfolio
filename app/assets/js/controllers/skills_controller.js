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

    this.onunload = function() { 
      document.querySelector('.skills').classList.add('fade-out');
    };

    this.isReady = function(el, init, $scope) { 
      //if(!init) return; 
      setTimeout(function() {
        el.classList.remove('fade-out');
      }, 300); 
    };

  };
})();

