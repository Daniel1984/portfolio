function ApplicationCtrl() {
  this.el = null;
}

ApplicationCtrl.prototype.onunload = function() {
  this.el = null;
  console.log('unloading - ', this.el);
};

ApplicationCtrl.prototype.isReady = function(el, init, $scope) { 
  this.el = el;
  console.log('loaded - ', this.el);
};

ApplicationCtrl.prototype.hideView = function() {
  history.go(0);
};

module.exports = ApplicationCtrl;
