(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict';
  
  module.exports = function() {
  
    this.hideView = function() {
      window.history.go(0);
    };

  };

})();

},{}],2:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function() {
    var _this = this;

    this.name = m.prop('');
    this.email = m.prop('');
    this.message = m.prop('');
    
    this.hideView = function() {
      window.history.go(0);
    };

    this.submit = function(e) {
      e.preventDefault();
      if(_this.email() === '' || _this.message() === '') {
        document.querySelector('.bg-danger').classList.remove('hide');
      } else {
        m.request({
          method: 'POST',
          url: '/contact',
          data: {
            email: _this.email(),
            name: _this.name(),
            message: _this.message()
          }
        });
      }
    };

    this.onInputKeyUp = function(e) {
      var activeEl = document.querySelector('label.active');
      if(activeEl) activeEl.classList.remove('active');
      e.currentTarget.querySelector('label').classList.add('active');
    };

  };

})();

},{"mithril":36}],3:[function(require,module,exports){
(function() {
  'use strict';
  
  module.exports = function() {

    this.hideView = function() {
      window.history.go(0);
    };

  };

})();

},{}],4:[function(require,module,exports){
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
      m.module(el, modules[module]);
      el.classList.add('animate');
    };

    this.isReady = function(el, ready, scope) {

    };

  };

})();

},{"../modules/portfolio/casino":13,"../modules/portfolio/orbit":14,"../modules/portfolio/plane":15,"../modules/portfolio/pt":16,"../modules/portfolio/slot":17,"../modules/portfolio/ss":18,"../modules/portfolio/ssc":19}],5:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = function() {

    this.fadeOutView = function() {
      document.querySelector('.portfolio-renderer').classList.remove('animate');
    };

  };

})();

},{}],6:[function(require,module,exports){
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

    this.hideView = function() {
      window.history.go(0);
    };
//    this.onunload = function() { 
//      document.querySelector('.skills').classList.add('fade-out');
//    };
//
//    this.isReady = function(el, init, $scope) { 
//      if(init) _this.initPhysics(el);
//      setTimeout(function() {
//        el.classList.remove('fade-out');
//      }, 300); 
//    };
//
//    this.initPhysics = function(el) {
//    
//    };

  };
})();


},{}],7:[function(require,module,exports){
(function() {
  'use strict';
  
  var modules = {
    about: require('../modules/about'),
    portfolio: require('../modules/portfolio'),
    skills: require('../modules/skills'),
    contact: require('../modules/contact'),
    experience: require('../modules/experience')
  };

  var m = require('mithril');

  module.exports = function() {
    var _this = this;
    _this.item_active = false;

    window.onpopstate = function(event) { 
      _this.item_active = false;
      history.go(1);
      document.querySelector('.tiles').style.overflowY = 'auto';
      document.querySelector('.inner-item.animate').classList.remove('animate');
    };

    this.onItemClick = function(e) {
      if(_this.item_active) {
        console.log('if');
        return;
      } else {
        console.log('else');
        history.pushState(null, null, location.href);
        document.querySelector('.tiles').style.overflowY = 'hidden';
        var module = e.currentTarget.getAttribute('data-module');
        var el = e.currentTarget.querySelector('.inner-item'); 
        m.module(el, modules[module]);
        el.classList.add('animate');
        _this.item_active = true;
      }
    };

  };

})();

},{"../modules/about":9,"../modules/contact":10,"../modules/experience":11,"../modules/portfolio":12,"../modules/skills":21,"mithril":36}],8:[function(require,module,exports){
(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
    m.route(document.querySelector('.ui-router'), '/', {
      '/': require('./modules/tiles'),
      'portfolio/:view': require('./modules/portfolio_item')
    });
  };

})();

},{"./modules/portfolio_item":20,"./modules/tiles":22,"mithril":36}],9:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../controllers/about_controller'),

    view: function(ctrl) { return require('../views/about')(ctrl); }

  };

})();

},{"../controllers/about_controller":1,"../views/about":23}],10:[function(require,module,exports){
(function() {
  'use strict'; 

  module.exports = {
    
    model: function() {},

    controller: require('../controllers/contact_controller'),

    view: function(ctrl) { return require('../views/contact')(ctrl); }

  };

})();

},{"../controllers/contact_controller":2,"../views/contact":24}],11:[function(require,module,exports){
(function() {
  'use strict'; 

  module.exports = {
    
    model: function() {},

    controller: require('../controllers/experience_controller'),

    view: function(ctrl) { return require('../views/experience')(ctrl); }

  };

})();

},{"../controllers/experience_controller":3,"../views/experience":25}],12:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return require('../views/portfolio')(ctrl); }

  };

})();

},{"../controllers/portfolio_controller":4,"../views/portfolio":26}],13:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/casino')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/casino":27}],14:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/orbit')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/orbit":28}],15:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/plane')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/plane":29}],16:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/pt')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/pt":30}],17:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/slot')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/slot":31}],18:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/ss')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/ss":32}],19:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/ssc')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/ssc":33}],20:[function(require,module,exports){
(function() {
  'use strict';
  
  var m = require('mithril');
  var views = {
        pt: require('../views/portfolio/pt'),
        casino: require('../views/portfolio/casino'),
        orbit: require('../views/portfolio/orbit'),
        plane: require('../views/portfolio/plane'),
        slot: require('../views/portfolio/slot'),
        ss: require('../views/portfolio/ss'),
        ssc: require('../views/portfolio/ssc')
      };

  module.exports = {

    model: function() {},

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return views[m.route.param('view')](ctrl); }

  };

})();

},{"../controllers/portfolio_controller":4,"../views/portfolio/casino":27,"../views/portfolio/orbit":28,"../views/portfolio/plane":29,"../views/portfolio/pt":30,"../views/portfolio/slot":31,"../views/portfolio/ss":32,"../views/portfolio/ssc":33,"mithril":36}],21:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    view: function(ctrl) { return require('../views/skills')(ctrl); },

    controller: require('../controllers/skills_controller')

  };

})();

},{"../controllers/skills_controller":6,"../views/skills":34}],22:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {
    
    model: function() {},

    view: function(ctrl) { return require('../views/tiles')(ctrl); },

    controller: require('../controllers/tiles_controller')

  };

})(); 

},{"../controllers/tiles_controller":7,"../views/tiles":35}],23:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.intro-p.row-fluid", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.pic.col-xs-12.col-sm-4.col-md-4.col-lg-4.col-sm-offset-4.col-md-offset-4.col-lg-offset-4', [
        m("img[src='/img/me.png']")
      ]),
      m('div.intro-text', [
        m('h1', 'Javascript Developer')
      ]),
      m('hr.star-light'),
      m('div.col-xs-12.col-sm-6.col-md-6.col-lg-6.col-sm-offset-3.col-md-offset-3.col-lg-offset-3', [
        m('p', 'Welcome to my online portfolio. I\'m a software developer currently based in Lithuania. I specialise in developing fast, web based applications such as SPA (single page applications) and hybrid mobile applications using cutting-edge technologies such as Node.js, Angular, Backbone, Mithril, Cordova and more! Contact me if you are looking for someone to build a project from scratch or help out with existing project.')
      ]),
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],24:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.contact-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.contact-header', [
        m('h1', 'Contact me'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m('p.bg-danger.hide', 'Email Address and Message are required fields'),
        m('form', [
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Name'),
            m("input.form-control[type='text'][placeholder='Name'][name='name']",
              { onchange: m.withAttr("value", ctrl.name), value: ctrl.name() }  
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Email Address'),
            m("input.form-control[type='email'][placeholder='Email Address'][name='email']",
              { onchange: m.withAttr("value", ctrl.email), value: ctrl.email() }
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Message'),
            m("textarea.form-control[placeholder='Message'][rows='4'][name='message']",
              { onchange: m.withAttr("value", ctrl.message), value: ctrl.message() }
            )
          ]),
          m('div.form-group', [
            m("button.btn.btn-lg.btn-success.pull-left.btn-outline[type='submit']", { onclick: ctrl.submit }, 'Send')
          ])
        ])
      ])
    ]);
  };

})();

},{"mithril":36}],25:[function(require,module,exports){
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

},{"mithril":36}],26:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m("div.portfolio-p.row-fluid.fade-out", { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.hideView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('h1', 'Portfolio'),
      m('hr.star-light'),
      ctrl.portfolio_items.map(function(item, i) {
        return m('div.col-sm-4.portfolio-item', [
          m("a.portfolio-link[data-module='" + item + "']", { onclick: ctrl.renderPortfolioItem }, [
            m('div.caption', [
              m('div.caption-content', [
                m('i.fa.fa-search-plus.fa-3x')
              ])
            ]),
            m("img[src='/img/portfolio/" + item + ".png']")
          ])
        ]);
      }),
      m('div.portfolio-renderer'),
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],27:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', '3D Room'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/casino.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Yet another Flash 3D example')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='/img/3d/index.html'][target='_blank']", 'http://www.3d.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Flash'),
            m('span.label.label-danger', 'ActionScript 3.0'),
            m('span.label.label-danger', 'HTML5')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],28:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Orbit'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/orbit.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'One of my first Flash 3D examples')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='/img/moonwalker/index.html'][target='_blank']", 'http://www.orbit.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Flash'),
            m('span.label.label-danger', 'ActionScript 3.0'),
            m('span.label.label-danger', 'HTML5')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],29:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Flappy plane'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/plane.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'My first game build with canvas. Automated development process with help of gulp and browserify.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://plane-flappy.herokuapp.com/'][target='_blank']", 'http://www.flappyplane.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Browserify'),
            m('span.label.label-danger', 'Pixi.js'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'MongoDB'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'LESS'),
            m('span.label.label-danger', 'HTML5'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],30:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Physitrack'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/pt.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'App build for home exercise prescription. Whole system consists of 5 different types of app: admin app, app for doctors, mobile web app for doctors, app for patiens and its mobile web app version. I was responsible mainly for the front-end logic including desktop and mobile versions. More info can be found on site.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://www.physitrack.com'][target='_blank']", 'http://www.physitrack.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Marionette.js'),
            m('span.label.label-danger', 'Sass'),
            m('span.label.label-danger', 'Bootstrap'),
            m('span.label.label-danger', 'Ruby on Rails'),
            m('span.label.label-danger', 'Msql'),
            m('span.label.label-danger', 'Capistrano'),
            m('span.label.label-danger', 'Jenkins'),
            m('span.label.label-danger', 'Coffeescript'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],31:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.pt.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Slot machine'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/slot.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Back from the time when I was playing with flash and ActionScript 3.0. Slot machine with bonus game.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='/img/slot/index.html'][target='_blank']", 'http://www.slotmachine.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Flash'),
            m('span.label.label-danger', 'ActionScript 3.0'),
            m('span.label.label-danger', 'HTML5')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],32:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Same System'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/ss.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'Shop administration application. Porting existing mobile app into cordova using latest HTML5, CSS3 and javascript features.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://samesystem.com/'][target='_blank']", 'http://www.samesystem.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Cordova'),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Browserify'),
            m('span.label.label-danger', 'Mocha'),
            m('span.label.label-danger', 'Chai'),
            m('span.label.label-danger', 'Karma'),
            m('span.label.label-danger', 'Bootstrap'),
            m('span.label.label-danger', 'Gulp'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'LESS'),
            m('span.label.label-danger', 'HTML5'),
            m('span.label.label-danger', 'CSS3'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],33:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function(ctrl) {
    return m('div.ssc.portfolio-item-inner.fade-out', { config: ctrl.isReady }, [
      m('div.back-top-btn', { onclick: ctrl.fadeOutView }, [
        m('i.fa.fa-long-arrow-left')
      ]),
      m('div.header', [
        m('h1', 'Star Slot City'),
        m('hr.star-light')
      ]),
      m('div.col-xs-12.col-sm-8.col-md-8.col-lg-8.col-sm-offset-2.col-md-offset-2.col-lg-offset-2', [
        m("img[src='/img/portfolio/ssc.png']"),
        m('div.row.content', [
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'About') ]),
            m('p', 'The online casino. This is one of the first web based, cross platform products working on desktop, tablet and mobile devices build for UK customers. I was responsible for the front as well as back-end of this app.')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-6.col-lg-6', [
            m('blockquote', [ m('h4', 'Address') ]),
            m("a[href='http://www.starslotcity.com'][target='_blank']", 'http://www.starslotcity.com')
          ]),
          m('div.col-xs-12.col-sm-12.col-md-12.col-lg-12', [
            m('blockquote', [ m('h4', 'Tools used') ]),
            m('span.label.label-danger', 'Backbone.js'),
            m('span.label.label-danger', 'Require.js'),
            m('span.label.label-danger', 'Jasmine'),
            m('span.label.label-danger', 'Node.js'),
            m('span.label.label-danger', 'Ruby on Rails'),
            m('span.label.label-danger', 'MongoDB'),
            m('span.label.label-danger', 'Postgresql'),
            m('span.label.label-danger', 'Rspec'),
            m('span.label.label-danger', 'Puppet'),
            m('span.label.label-danger', 'Capistrano'),
            m('span.label.label-danger', 'Jenkins'),
            m('span.label.label-danger', 'Coffeescript'),
            m('span.label.label-danger', 'Javascript'),
            m('span.label.label-danger', 'Github')
          ])
        ])
      ]),
      m('div.close-btn', { onclick: ctrl.fadeOutView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":36}],34:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    var view = m("div.skills-p.row-fluid.fade-out", { config: ctrl.isReady }, [
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

    return view;
  };

})();

},{"mithril":36}],35:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    return m("div.tiles", [
      m("div.tile-item.about [data-module='about']", { style: { background: '#5fea86' }, onclick: ctrl.onItemClick }, [
        m('div.header', [
          m("img[src='/img/me.png']")
        ]),
        m('div.body', [
          m('h2', 'Daniel Stenger'),
          m('h2', 'Javascript developer'),
        ]),
        m('div.inner-item')
      ]),

      m("div.tile-item.skills [data-module='skills']", { style: { background: '#dda0dd' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-magic'),
          m('h2', 'Skills')
        ]),
        m('div.inner-item')
      ]),

      m("div.tile-item.portfolio [data-module='portfolio']", { style: { background: '#fada72' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-suitcase'),
          m('h2', 'Portfolio')
        ]),
        m('div.inner-item')
      ]),

      m("div.tile-item.experience [data-module='experience']", { style: { background: '#ff8a80' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-clock-o'),
          m('h2', 'Experience')
        ]),
        m('div.inner-item')
      ]),

      m("div.tile-item.contact [data-module='contact']", { style: { background: '#b388ff' }, onclick: ctrl.onItemClick }, [
        m('div.body', [
          m('i.fa.fa-envelope'),
          m('h2', 'Contact')
        ]),
        m('div.inner-item')
      ])

    ]);
  };

})();

},{"mithril":36}],36:[function(require,module,exports){
Mithril = m = new function app(window) {
	var selectorCache = {}
	var type = {}.toString
	var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g, attrParser = /\[(.+?)(?:=("|'|)(.+?)\2)?\]/

	function m() {
		var args = arguments
		var hasAttrs = type.call(args[1]) == "[object Object]" && !("tag" in args[1]) && !("subtree" in args[1])
		var attrs = hasAttrs ? args[1] : {}
		var classAttrName = "class" in attrs ? "class" : "className"
		var cell = selectorCache[args[0]]
		if (cell === undefined) {
			selectorCache[args[0]] = cell = {tag: "div", attrs: {}}
			var match, classes = []
			while (match = parser.exec(args[0])) {
				if (match[1] == "") cell.tag = match[2]
				else if (match[1] == "#") cell.attrs.id = match[2]
				else if (match[1] == ".") classes.push(match[2])
				else if (match[3][0] == "[") {
					var pair = attrParser.exec(match[3])
					cell.attrs[pair[1]] = pair[3] || true
				}
			}
			if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ")
		}
		cell = clone(cell)
		cell.attrs = clone(cell.attrs)
		cell.children = hasAttrs ? args[2] : args[1]
		for (var attrName in attrs) {
			if (attrName == classAttrName) cell.attrs[attrName] = (cell.attrs[attrName] || "") + " " + attrs[attrName]
			else cell.attrs[attrName] = attrs[attrName]
		}
		return cell
	}
	function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
		if (data === null || data === undefined) data = ""
		if (data.subtree === "retain") return

		var cachedType = type.call(cached), dataType = type.call(data)
		if (cachedType != dataType) {
			if (cached !== null && cached !== undefined) {
				if (parentCache && parentCache.nodes) {
					var offset = index - parentIndex
					clear(parentCache.nodes.slice(offset, offset + (dataType == "[object Array]" ? data : cached.nodes).length))
				}
				else clear(cached.nodes)
			}
			cached = new data.constructor
			cached.nodes = []
		}

		if (dataType == "[object Array]") {
			var nodes = [], intact = cached.length === data.length, subArrayCount = 0
			
			var DELETION = 1, INSERTION = 2 , MOVE = 3
			var existing = {}, shouldMaintainIdentities = false
			for (var i = 0; i < cached.length; i++) {
				if (cached[i] && cached[i].attrs && cached[i].attrs.key !== undefined) {
					shouldMaintainIdentities = true
					existing[cached[i].attrs.key] = {action: DELETION, index: i}
				}
			}
			if (shouldMaintainIdentities) {
				for (var i = 0; i < data.length; i++) {
					if (data[i] && data[i].attrs && data[i].attrs.key !== undefined) {
						var key = data[i].attrs.key
						if (!existing[key]) existing[key] = {action: INSERTION, index: i}
						else existing[key] = {action: MOVE, index: i, from: existing[key].index, element: parentElement.childNodes[existing[key].index]}
					}
				}
				var actions = Object.keys(existing).map(function(key) {return existing[key]})
				var changes = actions.sort(function(a, b) {return a.action - b.action || b.index - a.index})
				var newCached = new Array(cached.length)
				
				for (var i = 0, change; change = changes[i]; i++) {
					if (change.action == DELETION) {
						clear(cached[change.index].nodes)
						newCached.splice(change.index, 1)
					}
					if (change.action == INSERTION) {
						var dummy = window.document.createElement("div")
						dummy.key = data[change.index].attrs.key.toString()
						parentElement.insertBefore(dummy, parentElement.childNodes[change.index])
						newCached.splice(change.index, 0, {attrs: {key: data[change.index].attrs.key}, nodes: [dummy]})
					}
					
					if (change.action == MOVE) {
						if (parentElement.childNodes[change.index] !== change.element) {
							parentElement.insertBefore(change.element, parentElement.childNodes[change.index])
						}
						newCached[change.index] = cached[change.from]
					}
				}
				cached = newCached
				cached.nodes = []
				for (var i = 0, child; child = parentElement.childNodes[i]; i++) cached.nodes.push(child)
			}
			
			for (var i = 0, cacheCount = 0; i < data.length; i++) {
				var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs)
				if (item === undefined) continue
				if (!item.nodes.intact) intact = false
				subArrayCount += item instanceof Array ? item.length : 1
				cached[cacheCount++] = item
			}
			if (!intact) {
				for (var i = 0; i < data.length; i++) {
					if (cached[i] !== undefined) nodes = nodes.concat(cached[i].nodes)
				}
				for (var i = nodes.length, node; node = cached.nodes[i]; i++) {
					if (node.parentNode !== null && node.parentNode.childNodes.length != nodes.length) node.parentNode.removeChild(node)
				}
				for (var i = cached.nodes.length, node; node = nodes[i]; i++) {
					if (node.parentNode === null) parentElement.appendChild(node)
				}
				if (data.length < cached.length) cached.length = data.length
				cached.nodes = nodes
			}
			
		}
		else if (dataType == "[object Object]") {
			if (data.tag != cached.tag || Object.keys(data.attrs).join() != Object.keys(cached.attrs).join() || data.attrs.id != cached.attrs.id) clear(cached.nodes)
			if (typeof data.tag != "string") return

			var node, isNew = cached.nodes.length === 0
			if (data.attrs.xmlns) namespace = data.attrs.xmlns
			else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg"
			if (isNew) {
				node = namespace === undefined ? window.document.createElement(data.tag) : window.document.createElementNS(namespace, data.tag)
				cached = {
					tag: data.tag,
					attrs: setAttributes(node, data.tag, data.attrs, {}, namespace),
					children: data.children !== undefined ? build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs) : undefined,
					nodes: [node]
				}
				parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			else {
				node = cached.nodes[0]
				setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
				cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs)
				cached.nodes.intact = true
				if (shouldReattach === true) parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			if (type.call(data.attrs["config"]) == "[object Function]") {
				configs.push(data.attrs["config"].bind(window, node, !isNew, cached.configContext = cached.configContext || {}))
			}
		}
		else {
			var nodes
			if (cached.nodes.length === 0) {
				if (data.$trusted) {
					nodes = injectHTML(parentElement, index, data)
				}
				else {
					nodes = [window.document.createTextNode(data)]
					parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
				}
				cached = "string number boolean".indexOf(typeof data) > -1 ? new data.constructor(data) : data
				cached.nodes = nodes
			}
			else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
				nodes = cached.nodes
				if (!editable || editable !== window.document.activeElement) {
					if (data.$trusted) {
						clear(nodes)
						nodes = injectHTML(parentElement, index, data)
					}
					else {
						if (parentTag === "textarea") parentElement.value = data
						else if (editable) editable.innerHTML = data
						else {
							if (nodes[0].nodeType == 1 || nodes.length > 1) { //was a trusted string
								clear(cached.nodes)
								nodes = [window.document.createTextNode(data)]
							}
							parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
							nodes[0].nodeValue = data
						}
					}
				}
				cached = new data.constructor(data)
				cached.nodes = nodes
			}
			else cached.nodes.intact = true
		}

		return cached
	}
	function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
		for (var attrName in dataAttrs) {
			var dataAttr = dataAttrs[attrName]
			var cachedAttr = cachedAttrs[attrName]
			if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr) || node === window.document.activeElement) {
				cachedAttrs[attrName] = dataAttr
				if (attrName === "config") continue
				else if (typeof dataAttr == "function" && attrName.indexOf("on") == 0) {
					node[attrName] = autoredraw(dataAttr, node)
				}
				else if (attrName === "style" && typeof dataAttr == "object") {
					for (var rule in dataAttr) {
						if (cachedAttr === undefined || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule]
					}
					for (var rule in cachedAttr) {
						if (!(rule in dataAttr)) node.style[rule] = ""
					}
				}
				else if (namespace !== undefined) {
					if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr)
					else if (attrName === "className") node.setAttribute("class", dataAttr)
					else node.setAttribute(attrName, dataAttr)
				}
				else if (attrName === "value" && tag === "input") {
					if (node.value !== dataAttr) node.value = dataAttr
				}
				else if (attrName in node && !(attrName == "list" || attrName == "style")) {
					node[attrName] = dataAttr
				}
				else node.setAttribute(attrName, dataAttr)
			}
		}
		return cachedAttrs
	}
	function clear(nodes) {
		for (var i = nodes.length - 1; i > -1; i--) if (nodes[i] && nodes[i].parentNode) nodes[i].parentNode.removeChild(nodes[i])
		nodes.length = 0
	}
	function injectHTML(parentElement, index, data) {
		var nextSibling = parentElement.childNodes[index]
		if (nextSibling) {
			var isElement = nextSibling.nodeType != 1
			var placeholder = window.document.createElement("span")
			if (isElement) {
				parentElement.insertBefore(placeholder, nextSibling)
				placeholder.insertAdjacentHTML("beforebegin", data)
				parentElement.removeChild(placeholder)
			}
			else nextSibling.insertAdjacentHTML("beforebegin", data)
		}
		else parentElement.insertAdjacentHTML("beforeend", data)
		var nodes = []
		while (parentElement.childNodes[index] !== nextSibling) {
			nodes.push(parentElement.childNodes[index])
			index++
		}
		return nodes
	}
	function clone(object) {
		var result = {}
		for (var prop in object) result[prop] = object[prop]
		return result
	}
	function autoredraw(callback, object) {
		return function(e) {
			e = e || event
			m.startComputation()
			try {return callback.call(object, e)}
			finally {m.endComputation()}
		}
	}

	var html
	var documentNode = {
		insertAdjacentHTML: function(_, data) {
			window.document.write(data)
			window.document.close()
		},
		appendChild: function(node) {
			if (html === undefined) html = window.document.createElement("html")
			if (node.nodeName == "HTML") html = node
			else html.appendChild(node)
			if (window.document.documentElement !== html) {
				window.document.replaceChild(html, window.document.documentElement)
			}
		},
		insertBefore: function(node) {
			this.appendChild(node)
		},
		childNodes: []
	}
	var nodeCache = [], cellCache = {}
	m.render = function(root, cell) {
		var configs = []
		if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.")
		var index = nodeCache.indexOf(root)
		var id = index < 0 ? nodeCache.push(root) - 1 : index
		var node = root == window.document || root == window.document.documentElement ? documentNode : root
		cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs)
		for (var i = 0; i < configs.length; i++) configs[i]()
	}

	m.trust = function(value) {
		value = new String(value)
		value.$trusted = true
		return value
	}

	var roots = [], modules = [], controllers = [], now = 0, lastRedraw = 0, lastRedrawId = 0, computePostRedrawHook = null
	m.module = function(root, module) {
		var index = roots.indexOf(root)
		if (index < 0) index = roots.length
		var isPrevented = false
		if (controllers[index] && typeof controllers[index].onunload == "function") {
			var event = {
				preventDefault: function() {isPrevented = true}
			}
			controllers[index].onunload(event)
		}
		if (!isPrevented) {
			m.startComputation()
			roots[index] = root
			modules[index] = module
			controllers[index] = new module.controller
			m.endComputation()
		}
	}
	m.redraw = function() {
		now = window.performance && window.performance.now ? window.performance.now() : new window.Date().getTime()
		if (now - lastRedraw > 16) redraw()
		else {
			var cancel = window.cancelAnimationFrame || window.clearTimeout
			var defer = window.requestAnimationFrame || window.setTimeout
			cancel(lastRedrawId)
			lastRedrawId = defer(redraw, 0)
		}
	}
	function redraw() {
		for (var i = 0; i < roots.length; i++) {
			if (controllers[i]) m.render(roots[i], modules[i].view(controllers[i]))
		}
		if (computePostRedrawHook) {
			computePostRedrawHook()
			computePostRedrawHook = null
		}
		lastRedraw = now
	}

	var pendingRequests = 0
	m.startComputation = function() {pendingRequests++}
	m.endComputation = function() {
		pendingRequests = Math.max(pendingRequests - 1, 0)
		if (pendingRequests == 0) m.redraw()
	}

	m.withAttr = function(prop, withAttrCallback) {
		return function(e) {
			e = e || event
			withAttrCallback(prop in e.currentTarget ? e.currentTarget[prop] : e.currentTarget.getAttribute(prop))
		}
	}

	//routing
	var modes = {pathname: "", hash: "#", search: "?"}
	var redirect = function() {}, routeParams = {}, currentRoute
	m.route = function() {
		if (arguments.length === 0) return currentRoute
		else if (arguments.length === 3 && typeof arguments[1] == "string") {
			var root = arguments[0], defaultRoute = arguments[1], router = arguments[2]
			redirect = function(source) {
				var path = currentRoute = normalizeRoute(source)
				if (!routeByValue(root, router, path)) {
					m.route(defaultRoute, true)
				}
			}
			var listener = m.route.mode == "hash" ? "onhashchange" : "onpopstate"
			window[listener] = function() {
				if (currentRoute != normalizeRoute(window.location[m.route.mode])) {
					redirect(window.location[m.route.mode])
				}
			}
			computePostRedrawHook = setScroll
			window[listener]()
			currentRoute = normalizeRoute(window.location[m.route.mode])
		}
		else if (arguments[0].addEventListener) {
			var element = arguments[0]
			var isInitialized = arguments[1]
			if (element.href.indexOf(modes[m.route.mode]) < 0) {
				element.href = window.location.pathname + modes[m.route.mode] + element.pathname
			}
			if (!isInitialized) {
				element.removeEventListener("click", routeUnobtrusive)
				element.addEventListener("click", routeUnobtrusive)
			}
		}
		else if (typeof arguments[0] == "string") {
			currentRoute = arguments[0]
			var querystring = typeof arguments[1] == "object" ? buildQueryString(arguments[1]) : null
			if (querystring) currentRoute += (currentRoute.indexOf("?") === -1 ? "?" : "&") + querystring

			var shouldReplaceHistoryEntry = (arguments.length == 3 ? arguments[2] : arguments[1]) === true

			if (window.history.pushState) {
				computePostRedrawHook = function() {
					window.history[shouldReplaceHistoryEntry ? "replaceState" : "pushState"](null, window.document.title, modes[m.route.mode] + currentRoute)
					setScroll()
				}
				redirect(modes[m.route.mode] + currentRoute)
			}
			else window.location[m.route.mode] = currentRoute
		}
	}
	m.route.param = function(key) {return routeParams[key]}
	m.route.mode = "search"
	function normalizeRoute(route) {return route.slice(modes[m.route.mode].length)}
	function routeByValue(root, router, path) {
		routeParams = {}

		var queryStart = path.indexOf("?")
		if (queryStart !== -1) {
			routeParams = parseQueryString(path.substr(queryStart + 1, path.length))
			path = path.substr(0, queryStart)
		}

		for (var route in router) {
			if (route == path) return !void m.module(root, router[route])

			var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")

			if (matcher.test(path)) {
				return !void path.replace(matcher, function() {
					var keys = route.match(/:[^\/]+/g) || []
					var values = [].slice.call(arguments, 1, -2)
					for (var i = 0; i < keys.length; i++) routeParams[keys[i].replace(/:|\./g, "")] = decodeSpace(values[i])
					m.module(root, router[route])
				})
			}
		}
	}
	function routeUnobtrusive(e) {
		e = e || event
		if (e.ctrlKey || e.metaKey || e.which == 2) return
		e.preventDefault()
		m.route(e.currentTarget[m.route.mode].slice(modes[m.route.mode].length))
	}
	function setScroll() {
		if (m.route.mode != "hash" && window.location.hash) window.location.hash = window.location.hash
		else window.scrollTo(0, 0)
	}
	function buildQueryString(object, prefix) {
		var str = []
		for(var prop in object) {
			var key = prefix ? prefix + "[" + prop + "]" : prop, value = object[prop]
			str.push(typeof value == "object" ? buildQueryString(value, key) : encodeURIComponent(key) + "=" + encodeURIComponent(value))
		}
		return str.join("&")
	}
	function parseQueryString(str) {
		var pairs = str.split("&"), params = {}
		for (var i = 0; i < pairs.length; i++) {
			var pair = pairs[i].split("=")
			params[decodeSpace(pair[0])] = pair[1] ? decodeSpace(pair[1]) : (pair.length === 1 ? true : "")
		}
		return params
	}
	function decodeSpace(string) {
		return decodeURIComponent(string.replace(/\+/g, " "))
	}

	//model
	m.prop = function(store) {
		var prop = function() {
			if (arguments.length) store = arguments[0]
			return store
		}
		prop.toJSON = function() {
			return store
		}
		return prop
	}

	var none = {}
	m.deferred = function() {
		var resolvers = [], rejecters = [], resolved = none, rejected = none, promise = m.prop()
		var object = {
			resolve: function(value) {
				if (resolved === none) promise(resolved = value)
				for (var i = 0; i < resolvers.length; i++) resolvers[i](value)
				resolvers.length = rejecters.length = 0
			},
			reject: function(value) {
				if (rejected === none) rejected = value
				for (var i = 0; i < rejecters.length; i++) rejecters[i](value)
				resolvers.length = rejecters.length = 0
			},
			promise: promise
		}
		object.promise.resolvers = resolvers
		object.promise.then = function(success, error) {
			var next = m.deferred()
			if (!success) success = identity
			if (!error) error = identity
			function callback(method, callback) {
				return function(value) {
					try {
						var result = callback(value)
						if (result && typeof result.then == "function") result.then(next[method], error)
						else next[method](result !== undefined ? result : value)
					}
					catch (e) {
						if (e instanceof Error && e.constructor !== Error) throw e
						else next.reject(e)
					}
				}
			}
			if (resolved !== none) callback("resolve", success)(resolved)
			else if (rejected !== none) callback("reject", error)(rejected)
			else {
				resolvers.push(callback("resolve", success))
				rejecters.push(callback("reject", error))
			}
			return next.promise
		}
		return object
	}
	m.sync = function(args) {
		var method = "resolve"
		function synchronizer(pos, resolved) {
			return function(value) {
				results[pos] = value
				if (!resolved) method = "reject"
				if (--outstanding == 0) {
					deferred.promise(results)
					deferred[method](results)
				}
				return value
			}
		}

		var deferred = m.deferred()
		var outstanding = args.length
		var results = new Array(outstanding)
		for (var i = 0; i < args.length; i++) {
			args[i].then(synchronizer(i, true), synchronizer(i, false))
		}
		return deferred.promise
	}
	function identity(value) {return value}

	function ajax(options) {
		var xhr = new window.XMLHttpRequest
		xhr.open(options.method, options.url, true, options.user, options.password)
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) options.onload({type: "load", target: xhr})
				else options.onerror({type: "error", target: xhr})
			}
		}
		if (typeof options.config == "function") {
			var maybeXhr = options.config(xhr, options)
			if (maybeXhr !== undefined) xhr = maybeXhr
		}
		xhr.send(options.data)
		return xhr
	}
	function bindData(xhrOptions, data, serialize) {
		if (data && Object.keys(data).length > 0) {
			if (xhrOptions.method == "GET") {
				xhrOptions.url = xhrOptions.url + (xhrOptions.url.indexOf("?") < 0 ? "?" : "&") + buildQueryString(data)
			}
			else xhrOptions.data = serialize(data)
		}
		return xhrOptions
	}
	function parameterizeUrl(url, data) {
		var tokens = url.match(/:[a-z]\w+/gi)
		if (tokens && data) {
			for (var i = 0; i < tokens.length; i++) {
				var key = tokens[i].slice(1)
				url = url.replace(tokens[i], data[key])
				delete data[key]
			}
		}
		return url
	}

	m.request = function(xhrOptions) {
		if (xhrOptions.background !== true) m.startComputation()
		var deferred = m.deferred()
		var serialize = xhrOptions.serialize || JSON.stringify
		var deserialize = xhrOptions.deserialize || JSON.parse
		var extract = xhrOptions.extract || function(xhr) {
			return xhr.responseText.length === 0 && deserialize === JSON.parse ? null : xhr.responseText
		}
		xhrOptions.url = parameterizeUrl(xhrOptions.url, xhrOptions.data)
		xhrOptions = bindData(xhrOptions, xhrOptions.data, serialize)
		xhrOptions.onload = xhrOptions.onerror = function(e) {
			try {
				e = e || event
				var unwrap = (e.type == "load" ? xhrOptions.unwrapSuccess : xhrOptions.unwrapError) || identity
				var response = unwrap(deserialize(extract(e.target, xhrOptions)))
				if (e.type == "load") {
					if (response instanceof Array && xhrOptions.type) {
						for (var i = 0; i < response.length; i++) response[i] = new xhrOptions.type(response[i])
					}
					else if (xhrOptions.type) response = new xhrOptions.type(response)
				}
				deferred[e.type == "load" ? "resolve" : "reject"](response)
			}
			catch (e) {
				if (e instanceof SyntaxError) throw new SyntaxError("Could not parse HTTP response. See http://lhorie.github.io/mithril/mithril.request.html#using-variable-data-formats")
				else if (e instanceof Error && e.constructor !== Error) throw e
				else deferred.reject(e)
			}
			if (xhrOptions.background !== true) m.endComputation()
		}
		ajax(xhrOptions)
		return deferred.promise
	}

	//testing API
	m.deps = function(mock) {return window = mock}
	//for internal testing only, do not use `m.deps.factory`
	m.deps.factory = app

	return m
}(typeof window != "undefined" ? window : {})

if (typeof module != "undefined" && module !== null) module.exports = m
if (typeof define == "function" && define.amd) define(function() {return m})

;;;

},{}]},{},[8])