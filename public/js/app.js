(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  'use strict';
  
  module.exports = function() {
  
    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
    };

  };

})();

},{}],2:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');
  var Model = require('../models/contact');

  module.exports = function() {
    var _this = this;

    this.model = new Model();
    
    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
    };

    this.submit = function(e) {
      e.preventDefault();
      if(_this.model.email() === '' || _this.model.message() === '') {
        document.querySelector('.bg-danger').classList.remove('hide');
      } else {
        var el = e.currentTarget;
        el.setAttribute('disabled', true);
        el.innerHTML = 'Sending...';
        _this.model.sendMail().then(function() {
          el.removeAttribute('disabled');
          el.innerHTML = 'Send';
          _this.model.resetAttributes();
        }, function(err) {
          console.log('error -> ', err); 
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

},{"../models/contact":9,"mithril":37}],3:[function(require,module,exports){
(function() {
  'use strict';
  
  module.exports = function() {

    this.hideView = function() {
      document.querySelector('.animate').classList.remove('animate');
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
      document.querySelector('.animate').classList.remove('animate');
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

},{"../modules/portfolio/casino":14,"../modules/portfolio/orbit":15,"../modules/portfolio/plane":16,"../modules/portfolio/pt":17,"../modules/portfolio/slot":18,"../modules/portfolio/ss":19,"../modules/portfolio/ssc":20}],5:[function(require,module,exports){
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
      document.querySelector('.animate').classList.remove('animate');
    };

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

    this.onItemClick = function(e) {
      document.querySelector('.ui-router').classList.add('hide-overflow');
      var module = e.currentTarget.getAttribute('data-module');
      var el = document.querySelector('.tile-item-renderer'); 
      m.module(el, modules[module]);
      el.classList.add('animate');
    };

  };

})();

},{"../modules/about":10,"../modules/contact":11,"../modules/experience":12,"../modules/portfolio":13,"../modules/skills":22,"mithril":37}],8:[function(require,module,exports){
(function() {
  "use strict";

  var m = require('mithril');

  window.onload = function() {
    m.route.mode = 'hash';
    var container = document.querySelector('.ui-router');
    m.route(container, '/', {
      '/': require('./modules/tiles'),
      'portfolio/:view': require('./modules/portfolio_item')
    });
  };

})();

},{"./modules/portfolio_item":21,"./modules/tiles":23,"mithril":37}],9:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril');

  module.exports = function() {
    var _this = this;

    this.name = m.prop('');
    this.email = m.prop('');
    this.message = m.prop('');
    
    this.sendMail = function() {
      var data = m.request({
        method: 'POST',
        url: '/contact',
        data: {
          email: _this.email(),
          name: _this.name(),
          message: _this.message()
        }
      });
      return data;
    };

    this.resetAttributes = function() {
      this.email('');
      this.name('');
      this.message('');
    };

  };

})();

},{"mithril":37}],10:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    controller: require('../controllers/about_controller'),

    view: function(ctrl) { return require('../views/about')(ctrl); }

  };

})();

},{"../controllers/about_controller":1,"../views/about":24}],11:[function(require,module,exports){
(function() {
  'use strict'; 

  module.exports = {
    
    controller: require('../controllers/contact_controller'),

    view: function(ctrl) { return require('../views/contact')(ctrl); }

  };

})();

},{"../controllers/contact_controller":2,"../views/contact":25}],12:[function(require,module,exports){
(function() {
  'use strict'; 

  module.exports = {
    
    controller: require('../controllers/experience_controller'),

    view: function(ctrl) { return require('../views/experience')(ctrl); }

  };

})();

},{"../controllers/experience_controller":3,"../views/experience":26}],13:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return require('../views/portfolio')(ctrl); }

  };

})();

},{"../controllers/portfolio_controller":4,"../views/portfolio":27}],14:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/casino')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/casino":28}],15:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/orbit')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/orbit":29}],16:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/plane')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/plane":30}],17:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/pt')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/pt":31}],18:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/slot')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/slot":32}],19:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/ss')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/ss":33}],20:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    model: function() {},

    controller: require('../../controllers/portfolio_item_controller'),

    view: function(ctrl) { return require('../../views/portfolio/ssc')(ctrl); }

  };

})();

},{"../../controllers/portfolio_item_controller":5,"../../views/portfolio/ssc":34}],21:[function(require,module,exports){
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

    controller: require('../controllers/portfolio_controller'),

    view: function(ctrl) { return views[m.route.param('view')](ctrl); }

  };

})();

},{"../controllers/portfolio_controller":4,"../views/portfolio/casino":28,"../views/portfolio/orbit":29,"../views/portfolio/plane":30,"../views/portfolio/pt":31,"../views/portfolio/slot":32,"../views/portfolio/ss":33,"../views/portfolio/ssc":34,"mithril":37}],22:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {

    view: function(ctrl) { return require('../views/skills')(ctrl); },

    controller: require('../controllers/skills_controller')

  };

})();

},{"../controllers/skills_controller":6,"../views/skills":35}],23:[function(require,module,exports){
(function() {
  'use strict';

  module.exports = {
    
    view: function(ctrl) { return require('../views/tiles')(ctrl); },

    controller: require('../controllers/tiles_controller')

  };

})(); 

},{"../controllers/tiles_controller":7,"../views/tiles":36}],24:[function(require,module,exports){
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

},{"mithril":37}],25:[function(require,module,exports){
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
              { onchange: m.withAttr("value", ctrl.model.name), value: ctrl.model.name() }  
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Email Address'),
            m("input.form-control[type='email'][placeholder='Email Address'][name='email']",
              { onchange: m.withAttr("value", ctrl.model.email), value: ctrl.model.email() }
            )
          ]),
          m('div.form-group', { onclick: ctrl.onInputKeyUp }, [
            m('label', 'Message'),
            m("textarea.form-control[placeholder='Message'][rows='4'][name='message']",
              { onchange: m.withAttr("value", ctrl.model.message), value: ctrl.model.message() }
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

},{"mithril":37}],26:[function(require,module,exports){
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

},{"mithril":37}],27:[function(require,module,exports){
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
      m('div.close-btn', { onclick: ctrl.hideView },  [
        m('i.fa.fa-times-circle-o')
      ])
    ]);
  };

})();

},{"mithril":37}],28:[function(require,module,exports){
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

},{"mithril":37}],29:[function(require,module,exports){
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

},{"mithril":37}],30:[function(require,module,exports){
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

},{"mithril":37}],31:[function(require,module,exports){
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

},{"mithril":37}],32:[function(require,module,exports){
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

},{"mithril":37}],33:[function(require,module,exports){
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

},{"mithril":37}],34:[function(require,module,exports){
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

},{"mithril":37}],35:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) { return m("div.skills-p.row-fluid.fade-out", [
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
  };

})();

},{"mithril":37}],36:[function(require,module,exports){
(function() {
  'use strict';

  var m = require('mithril'); 

  module.exports = function(ctrl) {
    return m("div.tiles", [
      m("div.tile-item.about [data-module='about']", { style: { background: '#5fea86' }, onclick: ctrl.onItemClick.bind(ctrl) }, [
        m('div.header', [
          m("img[src='/img/me.png']")
        ]),
        m('div.body', [
          m('h2', 'Daniel Stenger'),
          m('h2', 'Javascript developer'),
        ])
      ]),

      m("div.tile-item.skills [data-module='skills']", { style: { background: '#dda0dd' }, onclick: ctrl.onItemClick.bind(ctrl) }, [
        m('div.body', [
          m('i.fa.fa-magic'),
          m('h2', 'Skills')
        ])
      ]),

      m("a.tile-item.blog[href=http://aciddaniel.svbtle.com/]", { style: { background: '#B4BF72' }}, [
        m('div.body', [
          m('i.fa.fa-book'),
          m('h2', 'Blog')
        ])
      ]),

      m("div.tile-item.portfolio [data-module='portfolio']", { style: { background: '#fada72' }, onclick: ctrl.onItemClick.bind(ctrl) }, [
        m('div.body', [
          m('i.fa.fa-suitcase'),
          m('h2', 'Portfolio')
        ])
      ]),

      m("div.tile-item.experience [data-module='experience']", { style: { background: '#ff8a80' }, onclick: ctrl.onItemClick.bind(ctrl) }, [
        m('div.body', [
          m('i.fa.fa-clock-o'),
          m('h2', 'Experience')
        ])
      ]),

      m("div.tile-item.contact [data-module='contact']", { style: { background: '#b388ff' }, onclick: ctrl.onItemClick.bind(ctrl) }, [
        m('div.body', [
          m('i.fa.fa-envelope'),
          m('h2', 'Contact')
        ])
      ])

    ]);
  };

})();

},{"mithril":37}],37:[function(require,module,exports){
Mithril = m = new function app(window, undefined) {
	var sObj = "[object Object]", sArr = "[object Array]", sStr = "[object String]"
	function type(obj) {return {}.toString.call(obj)}
	function isObj(obj) {return type(obj) == sObj}
	function isArr(obj) {return type(obj) == sArr}
	function isFn(obj) {return typeof obj == "function"}
	function isStr(obj){ return type(obj) == sStr}
	var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g, attrParser = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/
	var voidElements = /AREA|BASE|BR|COL|COMMAND|EMBED|HR|IMG|INPUT|KEYGEN|LINK|META|PARAM|SOURCE|TR‌​ACK|WBR/

	/*
	 * @typedef {String} Tag
	 * A string that looks like -> div.classname#id[param=one][param2=two]
	 * Which describes a DOM node
	 */

	/*
	 *
	 * @param {Tag} The DOM node tag
	 * @param {Object=[]} optional key-value pairs to be mapped to DOM attrs
	 * @param {...mNode=[]} Zero or more Mithril child nodes. Can be an array, or splat (optional)
	 *
	 */
	function m() {
		var arrSlice = Array.prototype.slice;
		var args = arrSlice.call(arguments, 0)
		var hasAttrs = args[1] != null && isObj(args[1]) && !("tag" in args[1]) && !("subtree" in args[1])
		var attrs = hasAttrs ? args[1] : {}
		var classAttrName = "class" in attrs ? "class" : "className"
		var cell = {tag: "div", attrs: {}}
		var match, classes = []
		while (match = parser.exec(args[0])) {
			if (match[1] == "") cell.tag = match[2]
			else if (match[1] == "#") cell.attrs.id = match[2]
			else if (match[1] == ".") classes.push(match[2])
			else if (match[3][0] == "[") {
				var pair = attrParser.exec(match[3])
				cell.attrs[pair[1]] = pair[3] || (pair[2] ? "" :true)
			}
		}
		if (classes.length > 0) cell.attrs[classAttrName] = classes.join(" ")


		var children = hasAttrs ? args[2] : args[1]
		if (isArr(children) || type(children) == "[object Arguments]") {
			cell.children = arrSlice.call(children, 0)
		}
		else {
			cell.children = hasAttrs ? args.slice(2) : args.slice(1)
		}

		for (var attrName in attrs) {
			if (attrName == classAttrName) cell.attrs[attrName] = (cell.attrs[attrName] || "") + " " + attrs[attrName]
			else cell.attrs[attrName] = attrs[attrName]
		}
		return cell
	}
	function build(parentElement, parentTag, parentCache, parentIndex, data, cached, shouldReattach, index, editable, namespace, configs) {
		//`build` is a recursive function that manages creation/diffing/removal of DOM elements based on comparison between `data` and `cached`
		//the diff algorithm can be summarized as this:
		//1 - compare `data` and `cached`
		//2 - if they are different, copy `data` to `cached` and update the DOM based on what the difference is
		//3 - recursively apply this algorithm for every array and for the children of every virtual element

		//the `cached` data structure is essentially the same as the previous redraw's `data` data structure, with a few additions:
		//- `cached` always has a property called `nodes`, which is a list of DOM elements that correspond to the data represented by the respective virtual element
		//- in order to support attaching `nodes` as a property of `cached`, `cached` is *always* a non-primitive object, i.e. if the data was a string, then cached is a String instance. If data was `null` or `undefined`, cached is `new String("")`
		//- `cached also has a `configContext` property, which is the state storage object exposed by config(element, isInitialized, context)
		//- when `cached` is an Object, it represents a virtual element; when it's an Array, it represents a list of elements; when it's a String, Number or Boolean, it represents a text node

		//`parentElement` is a DOM element used for W3C DOM API calls
		//`parentTag` is only used for handling a corner case for textarea values
		//`parentCache` is used to remove nodes in some multi-node cases
		//`parentIndex` and `index` are used to figure out the offset of nodes. They're artifacts from before arrays started being flattened and are likely refactorable
		//`data` and `cached` are, respectively, the new and old nodes being diffed
		//`shouldReattach` is a flag indicating whether a parent node was recreated (if so, and if this node is reused, then this node must reattach itself to the new parent)
		//`editable` is a flag that indicates whether an ancestor is contenteditable
		//`namespace` indicates the closest HTML namespace as it cascades down from an ancestor
		//`configs` is a list of config functions to run after the topmost `build` call finishes running

		//there's logic that relies on the assumption that null and undefined data are equivalent to empty strings
		//- this prevents lifecycle surprises from procedural helpers that mix implicit and explicit return statements
		//- it simplifies diffing code
		if (data == null) data = ""
		if (data.subtree === "retain") return cached
		var cachedType = type(cached), dataType = type(data)
		if (cached == null || cachedType != dataType) {
			if (cached != null) {
				if (parentCache && parentCache.nodes) {
					var offset = index - parentIndex
					var end = offset + (dataType == sArr ? data : cached.nodes).length
					clear(parentCache.nodes.slice(offset, end), parentCache.slice(offset, end))
				}
				else if (cached.nodes) clear(cached.nodes, cached)
			}
			cached = new data.constructor
			if (cached.tag) cached = {} //if constructor creates a virtual dom element, use a blank object as the base cached node instead of copying the virtual el (#277)
			cached.nodes = []
		}

		if (dataType == sArr) {
			data = flatten(data)
			var nodes = [], intact = cached.length === data.length, subArrayCount = 0

			//keys algorithm: sort elements without recreating them if keys are present
			//1) create a map of all existing keys, and mark all for deletion
			//2) add new keys to map and mark them for addition
			//3) if key exists in new list, change action from deletion to a move
			//4) for each key, handle its corresponding action as marked in previous steps
			//5) copy unkeyed items into their respective gaps
			var DELETION = 1, INSERTION = 2 , MOVE = 3
			var existing = {}, unkeyed = [], shouldMaintainIdentities = false
			for (var i = 0; i < cached.length; i++) {
				if (cached[i] && cached[i].attrs && cached[i].attrs.key != null) {
					shouldMaintainIdentities = true
					existing[cached[i].attrs.key] = {action: DELETION, index: i}
				}
			}
			if (shouldMaintainIdentities) {
				for (var i = 0; i < data.length; i++) {
					if (data[i] && data[i].attrs) {
						if (data[i].attrs.key != null) {
							var key = data[i].attrs.key
							if (!existing[key]) existing[key] = {action: INSERTION, index: i}
							else existing[key] = {
								action: MOVE,
								index: i,
								from: existing[key].index,
								element: parentElement.childNodes[existing[key].index] || window.document.createElement("div")
							}
						}
						else unkeyed.push({index: i, element: parentElement.childNodes[i] || window.document.createElement("div")})
					}
				}
				var actions = Object.keys(existing).map(function(key) {return existing[key]})
				var changes = actions.sort(function(a, b) {return a.action - b.action || a.index - b.index})
				var newCached = cached.slice()

				for (var i = 0, change; change = changes[i]; i++) {
					if (change.action == DELETION) {
						clear(cached[change.index].nodes, cached[change.index])
						newCached.splice(change.index, 1)
					}
					if (change.action == INSERTION) {
						var dummy = window.document.createElement("div")
						dummy.key = data[change.index].attrs.key
						parentElement.insertBefore(dummy, parentElement.childNodes[change.index])
						newCached.splice(change.index, 0, {attrs: {key: data[change.index].attrs.key}, nodes: [dummy]})
					}

					if (change.action == MOVE) {
						if (parentElement.childNodes[change.index] !== change.element && change.element !== null) {
							parentElement.insertBefore(change.element, parentElement.childNodes[change.index])
						}
						newCached[change.index] = cached[change.from]
					}
				}
				for (var i = 0; i < unkeyed.length; i++) {
					var change = unkeyed[i]
					parentElement.insertBefore(change.element, parentElement.childNodes[change.index])
					newCached[change.index] = cached[change.index]
				}
				cached = newCached
				cached.nodes = []
				for (var i = 0, child; child = parentElement.childNodes[i]; i++) cached.nodes.push(child)
			}
			//end key algorithm

			for (var i = 0, cacheCount = 0; i < data.length; i++) {
				//diff each item in the array
				var item = build(parentElement, parentTag, cached, index, data[i], cached[cacheCount], shouldReattach, index + subArrayCount || subArrayCount, editable, namespace, configs)
				if (item === undefined) continue
				if (!item.nodes.intact) intact = false
				subArrayCount += isArr(item) ? item.length : 1
				cached[cacheCount++] = item
			}
			if (!intact) {
				//diff the array itself

				//update the list of DOM nodes by collecting the nodes from each item
				for (var i = 0; i < data.length; i++) {
					if (cached[i] != null) nodes = nodes.concat(cached[i].nodes)
				}
				//remove items from the end of the array if the new array is shorter than the old one
				//if errors ever happen here, the issue is most likely a bug in the construction of the `cached` data structure somewhere earlier in the program
				for (var i = 0, node; node = cached.nodes[i]; i++) {
					if (node.parentNode != null && nodes.indexOf(node) < 0) clear([node], [cached[i]])
				}
				//add items to the end if the new array is longer than the old one
				for (var i = cached.nodes.length, node; node = nodes[i]; i++) {
					if (node.parentNode == null) parentElement.appendChild(node)
				}
				if (data.length < cached.length) cached.length = data.length
				cached.nodes = nodes
			}
		}
		else if (data != null && dataType == sObj) {
			//if an element is different enough from the one in cache, recreate it
			if (data.tag != cached.tag || Object.keys(data.attrs).join() != Object.keys(cached.attrs).join() || data.attrs.id != cached.attrs.id) {
				clear(cached.nodes)
				if (cached.configContext && isFn(cached.configContext.onunload)) cached.configContext.onunload()
			}
			if (!isStr(data.tag)) return

			var node, isNew = cached.nodes.length === 0
			if (data.attrs.xmlns) namespace = data.attrs.xmlns
			else if (data.tag === "svg") namespace = "http://www.w3.org/2000/svg"
			else if (data.tag === "math") namespace = "http://www.w3.org/1998/Math/MathML"
			if (isNew) {
				node = namespace === undefined ? window.document.createElement(data.tag) : window.document.createElementNS(namespace, data.tag)
				cached = {
					tag: data.tag,
					//process children before attrs so that select.value works correctly
					children: build(node, data.tag, undefined, undefined, data.children, cached.children, true, 0, data.attrs.contenteditable ? node : editable, namespace, configs),
					attrs: setAttributes(node, data.tag, data.attrs, {}, namespace),
					nodes: [node]
				}
				parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			else {
				node = cached.nodes[0]
				setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
				cached.children = build(node, data.tag, undefined, undefined, data.children, cached.children, false, 0, data.attrs.contenteditable ? node : editable, namespace, configs)
				cached.nodes.intact = true
				if (shouldReattach === true && node != null) parentElement.insertBefore(node, parentElement.childNodes[index] || null)
			}
			//schedule configs to be called. They are called after `build` finishes running
			if (isFn(data.attrs["config"])) {
				var context = cached.configContext = cached.configContext || {}

				// bind
				var callback = function(data, args) {
					return function() {
						return data.attrs["config"].apply(data, args)
					}
				}
				configs.push(callback(data, [node, !isNew, context, cached]))
			}
		}
		else if (!isFn(dataType)) {
			//handle text nodes
			var nodes
			if (cached.nodes.length === 0) {
				if (data.$trusted) {
					nodes = injectHTML(parentElement, index, data)
				}
				else {
					nodes = [window.document.createTextNode(data)]
					if (!parentElement.nodeName.match(voidElements)) parentElement.insertBefore(nodes[0], parentElement.childNodes[index] || null)
				}
				cached = "string number boolean".indexOf(typeof data) > -1 ? new data.constructor(data) : data
				cached.nodes = nodes
			}
			else if (cached.valueOf() !== data.valueOf() || shouldReattach === true) {
				nodes = cached.nodes
				if (!editable || editable !== window.document.activeElement) {
					if (data.$trusted) {
						clear(nodes, cached)
						nodes = injectHTML(parentElement, index, data)
					}
					else {
						//corner case: replacing the nodeValue of a text node that is a child of a textarea/contenteditable doesn't work
						//we need to update the value property of the parent textarea or the innerHTML of the contenteditable element instead
						if (parentTag === "textarea") parentElement.value = data
						else if (editable) editable.innerHTML = data
						else {
							if (nodes[0].nodeType == 1 || nodes.length > 1) { //was a trusted string
								clear(cached.nodes, cached)
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
			if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr)) {
				cachedAttrs[attrName] = dataAttr
				try {
					//`config` isn't a real attributes, so ignore it
					//we don't ignore `key` because it must be unique and having it on the DOM helps debugging
					if (attrName === "config") continue
					//hook event handlers to the auto-redrawing system
					else if (isFn(dataAttr) && attrName.indexOf("on") == 0) {
						node[attrName] = autoredraw(dataAttr, node)
					}
					//handle `style: {...}`
					else if (attrName === "style" && isObj(dataAttr)) {
						for (var rule in dataAttr) {
							if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) node.style[rule] = dataAttr[rule]
						}
						for (var rule in cachedAttr) {
							if (!(rule in dataAttr)) node.style[rule] = ""
						}
					}
					//handle SVG
					else if (namespace != null) {
						if (attrName === "href") node.setAttributeNS("http://www.w3.org/1999/xlink", "href", dataAttr)
						else if (attrName === "className") node.setAttribute("class", dataAttr)
						else node.setAttribute(attrName, dataAttr)
					}
					//handle cases that are properties (but ignore cases where we should use setAttribute instead)
					//- list and form are typically used as strings, but are DOM element references in js
					//- when using CSS selectors (e.g. `m("[style='']")`), style is used as a string, but it's an object in js
					else if (attrName in node && !(attrName == "list" || attrName == "style" || attrName == "form")) {
						//FIXME: don't clobber value if still typing (see #151 and #214)
						//it appears browsers work like this:
						//- user types, updates UI immediately
						//- event handler, however, does NOT fire immediately if there's javascript running (because js is single threaded)
						//- once js finishes, then it runs rAF callback, which clobbers the input if we're using naive bidirectional bindings
						//- THEN it fires the event handler with the new input value
						//so if the input value is updated during the small window between registering a UI change natively and the end of non-idle js time, the input loses the value update from that event
						if (!(node === window.document.activeElement && attrName == "value")) node[attrName] = dataAttr
					}
					else node.setAttribute(attrName, dataAttr)
				}
				catch (e) {
					//swallow IE's invalid argument errors to mimic HTML's fallback-to-doing-nothing-on-invalid-attributes behavior
					if (e.message.indexOf("Invalid argument") < 0) throw e
				}
			}
		}
		return cachedAttrs
	}
	function clear(nodes, cached) {
		for (var i = nodes.length - 1; i > -1; i--) {
			if (nodes[i] && nodes[i].parentNode) {
				nodes[i].parentNode.removeChild(nodes[i])
				cached = [].concat(cached)
				if (cached[i]) unload(cached[i])
			}
		}
		if (nodes.length != 0) nodes.length = 0
	}
	function unload(cached) {
		if (cached.configContext && isFn(cached.configContext.onunload)) cached.configContext.onunload()
		if (cached.children) {
			if (isArr(cached.children)) {
				for (var i = 0; i < cached.children.length; i++) unload(cached.children[i])
			}
			else if (cached.children.tag) unload(cached.children)
		}
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
	function flatten(data) {
		var flattened = []
		for (var i = 0; i < data.length; i++) {
			var item = data[i]
			if (isArr(item)) flattened.push.apply(flattened, flatten(item))
			else flattened.push(item)
		}
		return flattened
	}
	function autoredraw(callback, object) {
		return function(e) {
			e = e || event
			m.redraw.strategy("diff")
			m.startComputation()
			try {return callback.call(object, e)}
			finally {
				//FIXME: force asynchronous redraw for event handlers, to prevent double redraw in cases like onkeypress+oninput (#151)
				//this solution isn't ideal because it creates a small window of opportunity for events to get lost (see #214).
				if (!lastRedrawId) lastRedrawId = -1
				m.endComputation()
			}
		}
	}

	var html
	var documentNode = {
		appendChild: function(node) {
			if (html === undefined) html = window.document.createElement("html")
			if (window.document.documentElement && window.document.documentElement !== node) {
				window.document.replaceChild(node, window.document.documentElement)
			}
			else window.document.appendChild(node)
			this.childNodes = window.document.childNodes
		},
		insertBefore: function(node) {
			this.appendChild(node)
		},
		childNodes: []
	}
	var nodeCache = [], cellCache = {}
	m.render = function(root, cell, forceRecreation) {
		var configs = []
		if (!root) throw new Error("Please ensure the DOM element exists before rendering a template into it.")
		var id = getCellCacheKey(root)
		var isDocumentRoot = root == window.document
		var node = isDocumentRoot || root == window.document.documentElement ? documentNode : root
		if (isDocumentRoot && cell.tag != "html") cell = {tag: "html", attrs: {}, children: cell}
		if (cellCache[id] === undefined) clear(node.childNodes)
		if (forceRecreation === true) reset(root)
		cellCache[id] = build(node, null, undefined, undefined, cell, cellCache[id], false, 0, null, undefined, configs)
		for (var i = 0; i < configs.length; i++) configs[i]()
	}
	function getCellCacheKey(element) {
		var index = nodeCache.indexOf(element)
		return index < 0 ? nodeCache.push(element) - 1 : index
	}

	m.trust = function(value) {
		value = new String(value)
		value.$trusted = true
		return value
	}

	function gettersetter(store) {
		var prop = function() {
			if (arguments.length) store = arguments[0]
			return store
		}

		prop.toJSON = function() {
			return store
		}

		return prop
	}

	m.prop = function (store) {
		if ((isObj(store) || isFn(store)) && store !== null && isFn(store.then)) {
			return propify(store)
		}

		return gettersetter(store)
	}

	var roots = [], modules = [], controllers = [], lastRedrawId = null, lastRedrawCallTime = 0, computePostRedrawHook = null, prevented = false
	var FRAME_BUDGET = 16 //60 frames per second = 1 call per 16 ms
	m.module = function(root, module) {
		var index = roots.indexOf(root)
		if (index < 0) index = roots.length
		var isPrevented = false
		if (controllers[index] && isFn(controllers[index].onunload)) {
			var event = {
				preventDefault: function() {isPrevented = true}
			}
			controllers[index].onunload(event)
		}
		if (!isPrevented) {
			m.redraw.strategy("all")
			m.startComputation()
			roots[index] = root
			modules[index] = module
			controllers[index] = new module.controller
			m.endComputation()
			return controllers[index]
		}
	}
	m.redraw = function(force) {
		var cancel = window.cancelAnimationFrame || window.clearTimeout
		var defer = window.requestAnimationFrame || window.setTimeout
		//lastRedrawId is a positive number if a second redraw is requested before the next animation frame
		//lastRedrawId is -1 if the redraw is the first one in a event handler (see #151)
		//lastRedrawID is null if it's the first redraw and not an event handler
		if (lastRedrawId && force !== true) {
			//when setTimeout: only reschedule redraw if time between now and previous redraw is bigger than a frame, otherwise keep currently scheduled timeout
			//when rAF: always reschedule redraw
			if (new Date - lastRedrawCallTime > FRAME_BUDGET || defer == window.requestAnimationFrame) {
				if (lastRedrawId > 0) cancel(lastRedrawId)
				lastRedrawId = defer(redraw, FRAME_BUDGET)
			}
		}
		else {
			redraw()
			lastRedrawId = defer(function() {lastRedrawId = null}, FRAME_BUDGET)
		}
	}
	m.redraw.strategy = m.prop()
	function redraw() {
		var mode = m.redraw.strategy()
		for (var i = 0; i < roots.length; i++) {
			if (controllers[i] && mode != "none") m.render(roots[i], modules[i].view(controllers[i]), mode == "all")
		}
		//after rendering within a routed context, we need to scroll back to the top, and fetch the document title for history.pushState
		if (computePostRedrawHook) {
			computePostRedrawHook()
			computePostRedrawHook = null
		}
		lastRedrawId = null
		lastRedrawCallTime = new Date
		m.redraw.strategy("diff")
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
			var currentTarget = e.currentTarget || this
			withAttrCallback(prop in currentTarget ? currentTarget[prop] : currentTarget.getAttribute(prop))
		}
	}

	//routing
	var modes = {pathname: "", hash: "#", search: "?"}
	var redirect = function() {}, routeParams = {}, currentRoute
	m.route = function() {
		if (arguments.length === 0) return currentRoute
		else if (arguments.length === 3 && isStr(arguments[1])) {
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
		}
		else if (arguments[0].addEventListener) {
			var element = arguments[0]
			var isInitialized = arguments[1]
			var context = arguments[2]
			if (!isInitialized) {
				context.href = element.getAttribute("href")
				element.href = window.location.pathname + modes[m.route.mode] + context.href
				element.removeEventListener("click", routeUnobtrusive)
				element.addEventListener("click", routeUnobtrusive)
			}
		}
		else if (isStr(arguments[0])) {
			currentRoute = arguments[0]
			var querystring = isObj(arguments[1]) ? buildQueryString(arguments[1]) : null
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
			if (route == path) {
				m.module(root, router[route])
				return true
			}

			var matcher = new RegExp("^" + route.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")

			if (matcher.test(path)) {
				path.replace(matcher, function() {
					var keys = route.match(/:[^\/]+/g) || []
					var values = [].slice.call(arguments, 1, -2)
					for (var i = 0; i < keys.length; i++) routeParams[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
					m.module(root, router[route])
				})
				return true
			}
		}
	}
	function routeUnobtrusive(e) {
		e = e || event
		if (e.ctrlKey || e.metaKey || e.which == 2) return
		if (e.preventDefault) e.preventDefault()
		else e.returnValue = false
		var currentTarget = e.currentTarget || this
		m.route(currentTarget[m.route.mode].slice(modes[m.route.mode].length))
	}
	function setScroll() {
		if (m.route.mode != "hash" && window.location.hash) window.location.hash = window.location.hash
		else window.scrollTo(0, 0)
	}
	function buildQueryString(object, prefix) {
		var str = []
		for(var prop in object) {
			var key = prefix ? prefix + "[" + prop + "]" : prop, value = object[prop]
			str.push(isObj(value) ? buildQueryString(value, key) : encodeURIComponent(key) + "=" + encodeURIComponent(value))
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
	function reset(root) {
		var cacheKey = getCellCacheKey(root)
		clear(root.childNodes, cellCache[cacheKey])
		cellCache[cacheKey] = undefined
	}

	m.deferred = function () {
		var deferred = new Deferred()
		deferred.promise = propify(deferred.promise)
		return deferred
	}
	function propify(promise) {
		prop = m.prop()
		promise.then(prop)
		prop.then = function(resolve, reject) {
			return propify(promise.then(resolve, reject))
		}
		return prop
	}
	//Promiz.mithril.js | Zolmeister | MIT
	//a modified version of Promiz.js, which does not conform to Promises/A+ for two reasons:
	//1) `then` callbacks are called synchronously (because setTimeout is too slow, and the setImmediate polyfill is too big
	//2) throwing subclasses of Error cause the error to be bubbled up instead of triggering rejection (because the spec does not account for the important use case of default browser error handling, i.e. message w/ line number)
	function Deferred(successCallback, failureCallback) {
		var RESOLVING = 1, REJECTING = 2, RESOLVED = 3, REJECTED = 4
		var self = this, state = 0, promiseValue = 0, next = []

		self["promise"] = {}

		self["resolve"] = function(value) {
			if (!state) {
				promiseValue = value
				state = RESOLVING

				fire()
			}
			return this
		}

		self["reject"] = function(value) {
			if (!state) {
				promiseValue = value
				state = REJECTING
				
				fire()
			}
			return this
		}

		self.promise["then"] = function(successCallback, failureCallback) {
			var deferred = new Deferred(successCallback, failureCallback)
			if (state == RESOLVED) {
				deferred.resolve(promiseValue)
			}
			else if (state == REJECTED) {
				deferred.reject(promiseValue)
			}
			else {
				next.push(deferred)
			}
			return deferred.promise
		}
		
		function finish(type) {
			state = type || REJECTED
			next.map(function(deferred) {
				state == RESOLVED && deferred.resolve(promiseValue) || deferred.reject(promiseValue)
			})
		}

		function thennable(then, successCallback, failureCallback, notThennableCallback) {
			if ((isObj(promiseValue) || isFn(promiseValue)) && isFn(then)) {
				try {
					// count protects against abuse calls from spec checker
					var count = 0
					then.call(promiseValue, function(value) {
						if (count++) return
						promiseValue = value
						successCallback()
					}, function (value) {
						if (count++) return
						promiseValue = value
						failureCallback()
					})
				}
				catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					failureCallback()
				}
			} else {
				notThennableCallback()
			}
		}

		function fire() {
			// check if it's a thenable
			var then
			try {
				then = promiseValue && promiseValue.then
			}
			catch (e) {
				m.deferred.onerror(e)
				promiseValue = e
				state = REJECTING
				return fire()
			}
			thennable(then, function() {
				state = RESOLVING
				fire()
			}, function() {
				state = REJECTING
				fire()
			}, function() {
				try {
					if (state == RESOLVING && isFn(successCallback)) {
						promiseValue = successCallback(promiseValue)
					}
					else if (state == REJECTING && isFn(failureCallback)) {
						promiseValue = failureCallback(promiseValue)
						state = RESOLVING
					}
				}
				catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					return finish()
				}

				if (promiseValue == self) {
					promiseValue = TypeError()
					finish()
				}
				else {
					thennable(then, function () {
						finish(RESOLVED)
					}, finish, function () {
						finish(state == RESOLVING && RESOLVED)
					})
				}
			})
		}
	}
	m.deferred.onerror = function(e) {
		if (type(e) == "[object Error]" && !e.constructor.toString().match(/ Error/)) throw e
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
		if (args.length > 0) {
			for (var i = 0; i < args.length; i++) {
				args[i].then(synchronizer(i, true), synchronizer(i, false))
			}
		}
		else deferred.resolve()

		return deferred.promise
	}
	function identity(value) {return value}

	function ajax(options) {
		if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
			var callbackKey = "mithril_callback_" + new Date().getTime() + "_" + (Math.round(Math.random() * 1e16)).toString(36)
			var script = window.document.createElement("script")

			window[callbackKey] = function(resp){
				delete window[callbackKey]
				window.document.body.removeChild(script)
				options.onload({
					type: "load",
					target: {
						responseText: resp
					}
				})
			}

			script.onerror = function(e) {
				delete window[callbackKey]
				window.document.body.removeChild(script)

				options.onerror({
					type: "error",
					target: {
						status: 500,
						responseText: JSON.stringify({error: "Error making jsonp request"})
					}
				})

				return false
			}

			script.onload = function(e) {
				return false
			}


			script.src = options.url
				+ (options.url.indexOf("?") > 0 ? "&" : "?")
				+ (options.callbackKey ? options.callbackKey : "callback")
				+ "=" + callbackKey
				+ "&" + buildQueryString(options.data || {})
			window.document.body.appendChild(script)
		}
		else {
			var xhr = new window.XMLHttpRequest
			xhr.open(options.method, options.url, true, options.user, options.password)
			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status >= 200 && xhr.status < 300) options.onload({type: "load", target: xhr})
					else options.onerror({type: "error", target: xhr})
				}
			}
			if (options.serialize == JSON.stringify && options.data && options.method != "GET") {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (options.deserialize == JSON.parse) {
				xhr.setRequestHeader("Accept", "application/json, text/*");
			}
			if (isFn(options.config)) {
				var maybeXhr = options.config(xhr, options)
				if (maybeXhr != null) xhr = maybeXhr
			}

			xhr.send(options.method == "GET" || !options.data ? "" : options.data)
			return xhr
		}
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
		var isJSONP = xhrOptions.dataType && xhrOptions.dataType.toLowerCase() === "jsonp"
		var serialize = xhrOptions.serialize = isJSONP ? identity : xhrOptions.serialize || JSON.stringify
		var deserialize = xhrOptions.deserialize = isJSONP ? identity : xhrOptions.deserialize || JSON.parse
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
					if (isArr(response) && xhrOptions.type) {
						for (var i = 0; i < response.length; i++) response[i] = new xhrOptions.type(response[i])
					}
					else if (xhrOptions.type) response = new xhrOptions.type(response)
				}
				deferred[e.type == "load" ? "resolve" : "reject"](response)
			}
			catch (e) {
				m.deferred.onerror(e)
				deferred.reject(e)
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