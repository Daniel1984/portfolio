(function() {
  'use strict';
  
  var Physics = require('PhysicsJS');

  module.exports = function() {
    var _this = this;
    var delta = [ 0, 0 ];
    var stage = [ window.screenX, window.screenY, window.innerWidth, window.innerHeight ];
    var worldAABB, world, edgeBounce, constraints;
    var iterations = 16;
    var timeStep = 1000 / 260;

    worldAABB = Physics.aabb.apply(null, stage);
    world = Physics({
      timestep: timeStep,
      maxIPF: iterations
    });

    edgeBounce = Physics.behavior('edge-collision-detection', {
      aabb: worldAABB,
      restitution: 0.4,
      cof: 0.5
    });

    world.add( edgeBounce );
    world.add( Physics.behavior('body-collision-detection', { checkAll: false }) );
    world.add( Physics.behavior('sweep-prune') );
    world.add( Physics.behavior('body-impulse-response') );

    constraints = Physics.behavior('verlet-constraints', {
      iterations: 2
    });
    world.add( constraints );
  };

})();

