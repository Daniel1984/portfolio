(function() {
  'use strict';

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
      if(init) _this.initPhysics(el);
      setTimeout(function() {
        el.classList.remove('fade-out');
      }, 300); 
    };

    this.initPhysics = function(el) {
    
    };

  };
})();

