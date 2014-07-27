(function() {
  'use strict';
  
  var modules = {
    ssc: require('../modules/portfolio/ssc'),
    pt: require('../modules/portfolio/pt'),
    ss: require('../modules/portfolio/ss'),
    plane: require('../modules/portfolio/plane'),
    slot: require('../modules/portfolio/slot'),
    orbit: require('../modules/portfolio/orbit'),
    casino: require('../modules/portfolio/casino')
  };

  module.exports = function() {
    this.portfolio_items = ['ssc','pt','ss','plane','slot','orbit','casino'];
  
    this.hideView = function() {
      window.history.go(0);
    };

    this.renderPortfolioItem = function(e) {
      e.preventDefault();
      var module = e.currentTarget.getAttribute('data-module');
      var el = document.querySelector('.portfolio-renderer');
      el.classList.add('animate');
      window.cock = modules[module];
      m.module(el, modules[module]);
    };

    this.isReady = function(el, ready, scope) {

    };

  };

})();
