var require = meteorInstall({"template.index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// template.index.js                                                                                               //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
                                                                                                                   // 1
Template.body.addContent((function() {                                                                             // 2
  var view = this;                                                                                                 // 3
  return "";                                                                                                       // 4
}));                                                                                                               // 5
Meteor.startup(Template.body.renderToDocument);                                                                    // 6
                                                                                                                   // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"client":{"lib":{"router.jsx":["react","react-dom","react-mounter","../layouts/main-layout.jsx","../app/Home.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/lib/router.jsx                                                                                           //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var mount;module.import('react-mounter',{"mount":function(v){mount=v}});var MainLayout;module.import('../layouts/main-layout.jsx',{"MainLayout":function(v){MainLayout=v}});var Home;module.import('../app/Home.jsx',{"default":function(v){Home=v}});
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
                                                                                                                   // 6
                                                                                                                   // 7
                                                                                                                   //
FlowRouter.route('/', {                                                                                            // 9
  action: function () {                                                                                            // 10
    function action() {                                                                                            // 9
      mount(MainLayout, { content: React.createElement(Home, null) });                                             // 11
    }                                                                                                              // 12
                                                                                                                   //
    return action;                                                                                                 // 9
  }()                                                                                                              // 9
});                                                                                                                // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"app":{"partials":{"Footer.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/app/partials/Footer.jsx                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var Footer = function (_TrackerReact) {                                                                            //
  _inherits(Footer, _TrackerReact);                                                                                //
                                                                                                                   //
  // Note: In ES6, constructor() === componentWillMount() in React ES5                                             //
                                                                                                                   //
  function Footer() {                                                                                              // 9
    _classCallCheck(this, Footer);                                                                                 // 9
                                                                                                                   //
    return _possibleConstructorReturn(this, _TrackerReact.call(this));                                             // 9
  }                                                                                                                // 12
                                                                                                                   //
  Footer.prototype.componentDidMount = function () {                                                               //
    function componentDidMount() {}                                                                                //
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  Footer.prototype.render = function () {                                                                          //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 20
        'div',                                                                                                     // 21
        null,                                                                                                      // 21
        React.createElement(                                                                                       // 22
          'div',                                                                                                   // 22
          { className: 'footer-logo' },                                                                            // 22
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: 'Logo image' })
        ),                                                                                                         // 22
        React.createElement(                                                                                       // 25
          'ul',                                                                                                    // 25
          null,                                                                                                    // 25
          React.createElement(                                                                                     // 26
            'li',                                                                                                  // 26
            null,                                                                                                  // 26
            React.createElement(                                                                                   // 26
              'a',                                                                                                 // 26
              { href: 'javascript:void(0)' },                                                                      // 26
              'About'                                                                                              // 26
            )                                                                                                      // 26
          ),                                                                                                       // 26
          React.createElement(                                                                                     // 27
            'li',                                                                                                  // 27
            null,                                                                                                  // 27
            React.createElement(                                                                                   // 27
              'a',                                                                                                 // 27
              { href: 'javascript:void(0)' },                                                                      // 27
              'Contact'                                                                                            // 27
            )                                                                                                      // 27
          ),                                                                                                       // 27
          React.createElement(                                                                                     // 28
            'li',                                                                                                  // 28
            null,                                                                                                  // 28
            React.createElement(                                                                                   // 28
              'a',                                                                                                 // 28
              { href: 'javascript:void(0)' },                                                                      // 28
              'Products'                                                                                           // 28
            )                                                                                                      // 28
          )                                                                                                        // 28
        ),                                                                                                         // 25
        React.createElement(                                                                                       // 31
          'div',                                                                                                   // 31
          { className: 'footer-secondary-links' },                                                                 // 31
          React.createElement(                                                                                     // 32
            'ul',                                                                                                  // 32
            null,                                                                                                  // 32
            React.createElement(                                                                                   // 33
              'li',                                                                                                // 33
              null,                                                                                                // 33
              React.createElement(                                                                                 // 33
                'a',                                                                                               // 33
                { href: 'javascript:void(0)' },                                                                    // 33
                'Terms and Conditions'                                                                             // 33
              )                                                                                                    // 33
            ),                                                                                                     // 33
            React.createElement(                                                                                   // 34
              'li',                                                                                                // 34
              null,                                                                                                // 34
              React.createElement(                                                                                 // 34
                'a',                                                                                               // 34
                { href: 'javascript:void(0)' },                                                                    // 34
                'Privacy Policy'                                                                                   // 34
              )                                                                                                    // 34
            )                                                                                                      // 34
          ),                                                                                                       // 32
          React.createElement(                                                                                     // 37
            'ul',                                                                                                  // 37
            { className: 'footer-social' },                                                                        // 37
            React.createElement(                                                                                   // 38
              'li',                                                                                                // 38
              null,                                                                                                // 38
              React.createElement(                                                                                 // 38
                'a',                                                                                               // 38
                { href: 'javascript:void(0)' },                                                                    // 38
                React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/facebook-logo-circle.png', alt: 'Facebook' })
              )                                                                                                    // 38
            ),                                                                                                     // 38
            React.createElement(                                                                                   // 41
              'li',                                                                                                // 41
              null,                                                                                                // 41
              React.createElement(                                                                                 // 41
                'a',                                                                                               // 41
                { href: 'javascript:void(0)' },                                                                    // 41
                React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/twitter-logo-circle.png', alt: 'Twitter' })
              )                                                                                                    // 41
            ),                                                                                                     // 41
            React.createElement(                                                                                   // 44
              'li',                                                                                                // 44
              null,                                                                                                // 44
              React.createElement(                                                                                 // 44
                'a',                                                                                               // 44
                { href: 'javascript:void(0)' },                                                                    // 44
                React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/youtube-logo-circle.png', alt: 'YouTube' })
              )                                                                                                    // 44
            )                                                                                                      // 44
          )                                                                                                        // 37
        )                                                                                                          // 31
      );                                                                                                           // 21
    }                                                                                                              // 51
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Footer;                                                                                                   //
}(TrackerReact(Component));                                                                                        //
                                                                                                                   //
module.export("default",exports.default=(Footer));                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Grid.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/app/partials/Grid.jsx                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var Grid = function (_TrackerReact) {                                                                              //
  _inherits(Grid, _TrackerReact);                                                                                  //
                                                                                                                   //
  // Note: In ES6, constructor() === componentWillMount() in React ES5                                             //
                                                                                                                   //
  function Grid() {                                                                                                // 9
    _classCallCheck(this, Grid);                                                                                   // 9
                                                                                                                   //
    return _possibleConstructorReturn(this, _TrackerReact.call(this));                                             // 9
  }                                                                                                                // 12
                                                                                                                   //
  Grid.prototype.componentDidMount = function () {                                                                 //
    function componentDidMount() {}                                                                                //
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  Grid.prototype.render = function () {                                                                            //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 20
        'div',                                                                                                     // 21
        { className: 'grid-items' },                                                                               // 21
        React.createElement(                                                                                       // 22
          'a',                                                                                                     // 22
          { href: 'javascript:void(0)', className: 'grid-item' },                                                  // 22
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 24
            'h1',                                                                                                  // 24
            null,                                                                                                  // 24
            'Grid Item'                                                                                            // 24
          ),                                                                                                       // 24
          React.createElement(                                                                                     // 25
            'p',                                                                                                   // 25
            null,                                                                                                  // 25
            'Lorem ipsum dolor sit amet, elit. Rem, illum.'                                                        // 25
          )                                                                                                        // 25
        ),                                                                                                         // 22
        React.createElement(                                                                                       // 27
          'a',                                                                                                     // 27
          { href: 'javascript:void(0)', className: 'grid-item grid-item-big grid-item-image' },                    // 27
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 29
            'h1',                                                                                                  // 29
            null,                                                                                                  // 29
            'Grid Item With an Image'                                                                              // 29
          ),                                                                                                       // 29
          React.createElement(                                                                                     // 30
            'p',                                                                                                   // 30
            null,                                                                                                  // 30
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, illum.'                                // 30
          )                                                                                                        // 30
        ),                                                                                                         // 27
        React.createElement(                                                                                       // 32
          'a',                                                                                                     // 32
          { href: 'javascript:void(0)', className: 'grid-item grid-item-big' },                                    // 32
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 34
            'h1',                                                                                                  // 34
            null,                                                                                                  // 34
            'Another Wide Item'                                                                                    // 34
          ),                                                                                                       // 34
          React.createElement(                                                                                     // 35
            'p',                                                                                                   // 35
            null,                                                                                                  // 35
            'Lorem ipsum consectetur dolor sit amet, consectetur adipisicing elit. Rem, illum.'                    // 35
          )                                                                                                        // 35
        ),                                                                                                         // 32
        React.createElement(                                                                                       // 37
          'a',                                                                                                     // 37
          { href: 'javascript:void(0)', className: 'grid-item' },                                                  // 37
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 39
            'h1',                                                                                                  // 39
            null,                                                                                                  // 39
            'Last Grid Item'                                                                                       // 39
          ),                                                                                                       // 39
          React.createElement(                                                                                     // 40
            'p',                                                                                                   // 40
            null,                                                                                                  // 40
            'Lorem ipsum dolor sit amet, elit. Rem, illum.'                                                        // 40
          )                                                                                                        // 40
        ),                                                                                                         // 37
        React.createElement(                                                                                       // 42
          'a',                                                                                                     // 42
          { href: 'javascript:void(0)', className: 'grid-item' },                                                  // 42
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 44
            'h1',                                                                                                  // 44
            null,                                                                                                  // 44
            'Last Grid Item'                                                                                       // 44
          ),                                                                                                       // 44
          React.createElement(                                                                                     // 45
            'p',                                                                                                   // 45
            null,                                                                                                  // 45
            'Lorem ipsum dolor sit amet, elit. Rem, illum.'                                                        // 45
          )                                                                                                        // 45
        ),                                                                                                         // 42
        React.createElement(                                                                                       // 47
          'a',                                                                                                     // 47
          { href: 'javascript:void(0)', className: 'grid-item' },                                                  // 47
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 49
            'h1',                                                                                                  // 49
            null,                                                                                                  // 49
            'A Grid Item'                                                                                          // 49
          ),                                                                                                       // 49
          React.createElement(                                                                                     // 50
            'p',                                                                                                   // 50
            null,                                                                                                  // 50
            'Lorem ipsum dolor sit amet, elit. Rem, illum.'                                                        // 50
          )                                                                                                        // 50
        ),                                                                                                         // 47
        React.createElement(                                                                                       // 52
          'a',                                                                                                     // 52
          { href: 'javascript:void(0)', className: 'grid-item' },                                                  // 52
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: '' }),
          React.createElement(                                                                                     // 54
            'h1',                                                                                                  // 54
            null,                                                                                                  // 54
            'Item'                                                                                                 // 54
          ),                                                                                                       // 54
          React.createElement(                                                                                     // 55
            'p',                                                                                                   // 55
            null,                                                                                                  // 55
            'Lorem ipsum dolor sit amet, elit. Rem, illum.'                                                        // 55
          )                                                                                                        // 55
        )                                                                                                          // 52
      );                                                                                                           // 21
    }                                                                                                              // 59
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Grid;                                                                                                     //
}(TrackerReact(Component));                                                                                        //
                                                                                                                   //
module.export("default",exports.default=(Grid));                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Hero.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/app/partials/Hero.jsx                                                                                    //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var Hero = function (_TrackerReact) {                                                                              //
		_inherits(Hero, _TrackerReact);                                                                                  //
                                                                                                                   //
		// Note: In ES6, constructor() === componentWillMount() in React ES5                                             //
                                                                                                                   //
		function Hero() {                                                                                                // 9
				_classCallCheck(this, Hero);                                                                                   // 9
                                                                                                                   //
				var _this = _possibleConstructorReturn(this, _TrackerReact.call(this));                                        // 9
                                                                                                                   //
				_this.state = {                                                                                                // 12
						latestGames: []                                                                                              // 13
				};                                                                                                             // 12
                                                                                                                   //
				return _this;                                                                                                  // 9
		}                                                                                                                // 16
                                                                                                                   //
		Hero.prototype.componentDidMount = function () {                                                                 //
				function componentDidMount() {                                                                                 //
						var _this2 = this;                                                                                           // 18
                                                                                                                   //
						Meteor.call("latestGames", {}, function (error, res) {                                                       // 19
								if (error || res === undefined) {                                                                          // 20
										console.log("error:", error);                                                                            // 21
										Bert.alert('Something went wrong. Call Ivan!!', 'danger', 'fixed-top', 'fa-frown-o');                    // 22
								} else {                                                                                                   // 23
										console.log(res.data.results);                                                                           // 24
										_this2.setState({                                                                                        // 25
												latestGames: res.data.results                                                                          // 26
                                                                                                                   //
										});                                                                                                      // 25
								}                                                                                                          // 29
						});                                                                                                          // 30
                                                                                                                   //
						var allSlides, slide1, slide2, slide3, slide4, allSubnavs;                                                   // 32
                                                                                                                   //
						allSlides = $('.slide');                                                                                     // 34
						slide1 = $('#slide-1');                                                                                      // 35
						slide2 = $('#slide-2');                                                                                      // 36
						slide3 = $('#slide-3');                                                                                      // 37
						slide4 = $('#slide-4');                                                                                      // 38
                                                                                                                   //
						allSubnavs = $('.slide-nav');                                                                                // 40
                                                                                                                   //
						// Next-Prev navigation for slider                                                                           //
						$('.next').on('click', function (e) {                                                                        // 43
								e.preventDefault();                                                                                        // 44
                                                                                                                   //
								// Sub-nav buttons have to slide too                                                                       //
								nextSlideNav = $('.active-slide.slide-nav').next('div');                                                   // 47
								if (nextSlideNav.length == 0) {                                                                            // 48
										nextSlideNav = $('.slide-nav:first');                                                                    // 49
								}                                                                                                          // 50
								nextSlideNav.siblings().removeClass('active-slide');                                                       // 51
								nextSlideNav.addClass('active-slide');                                                                     // 52
                                                                                                                   //
								// Slides                                                                                                  //
								currentSlide = $('.active-slide.slide');                                                                   // 55
								currentSlide.addClass('recent-slide');                                                                     // 56
                                                                                                                   //
								nextSlide = $('.active-slide.slide').next('.slide');                                                       // 58
								if (nextSlide.length == 0) {                                                                               // 59
										nextSlide = $('.slide:first');                                                                           // 60
								}                                                                                                          // 61
                                                                                                                   //
								allSlides.removeClass('active-slide');                                                                     // 63
								nextSlide.removeClass('move-right move-left').addClass('active-slide');                                    // 64
                                                                                                                   //
								setTimeout(function () {                                                                                   // 66
										$(nextSlide).prevAll('.slide').removeClass('move-right').addClass('move-left');                          // 67
										$(nextSlide).nextAll('.slide').removeClass('move-left').addClass('move-right');                          // 68
								}, 250);                                                                                                   // 70
                                                                                                                   //
								setTimeout(function () {                                                                                   // 72
										currentSlide.removeClass('recent-slide');                                                                // 73
								}, 610);                                                                                                   // 74
						});                                                                                                          // 76
                                                                                                                   //
						$('.prev').on('click', function (e) {                                                                        // 78
								e.preventDefault();                                                                                        // 79
                                                                                                                   //
								// Sub-nav buttons have to slide too                                                                       //
								prevSlideNav = $('.active-slide.slide-nav').prev('div');                                                   // 82
								if (prevSlideNav.length == 0) {                                                                            // 83
										prevSlideNav = $('.slide-nav:last');                                                                     // 84
								}                                                                                                          // 85
								prevSlideNav.siblings().removeClass('active-slide');                                                       // 86
								prevSlideNav.addClass('active-slide');                                                                     // 87
                                                                                                                   //
								// Slides                                                                                                  //
								currentSlide = $('.active-slide.slide');                                                                   // 90
								currentSlide.addClass('recent-slide');                                                                     // 91
                                                                                                                   //
								prevSlide = $('.active-slide.slide').prev('.slide');                                                       // 93
								if (prevSlide.length == 0) {                                                                               // 94
										prevSlide = $('.slide:last');                                                                            // 95
								}                                                                                                          // 96
                                                                                                                   //
								allSlides.removeClass('active-slide');                                                                     // 98
								prevSlide.removeClass('move-right move-left').addClass('active-slide');                                    // 99
                                                                                                                   //
								setTimeout(function () {                                                                                   // 101
										$(prevSlide).prevAll('.slide').removeClass('move-right').addClass('move-left');                          // 102
										$(prevSlide).nextAll('.slide').removeClass('move-left').addClass('move-right');                          // 103
								}, 250);                                                                                                   // 104
                                                                                                                   //
								setTimeout(function () {                                                                                   // 106
										currentSlide.removeClass('recent-slide');                                                                // 107
								}, 610);                                                                                                   // 108
						});                                                                                                          // 110
                                                                                                                   //
						// Sub-nav for slider                                                                                        //
						$('.one').on('click', function (e) {                                                                         // 113
								e.preventDefault();                                                                                        // 114
								// 	Sub-nav                                                                                                //
								currentSlideNav = $(this).closest('div');                                                                  // 116
								currentSlideNav.siblings().removeClass('active-slide');                                                    // 117
								currentSlideNav.addClass('active-slide');                                                                  // 118
                                                                                                                   //
								// 	Slides                                                                                                 //
								currentSlide = $('.active-slide.slide');                                                                   // 121
								currentSlide.addClass('recent-slide');                                                                     // 122
                                                                                                                   //
								$(allSlides).removeClass('active-slide');                                                                  // 124
								$(slide1).removeClass('move-left').addClass('active-slide');                                               // 125
                                                                                                                   //
								setTimeout(function () {                                                                                   // 127
										$(slide1).nextAll('.slide').removeClass('move-left').addClass('move-right');                             // 128
								}, 250);                                                                                                   // 129
                                                                                                                   //
								setTimeout(function () {                                                                                   // 131
										currentSlide.removeClass('recent-slide');                                                                // 132
								}, 610);                                                                                                   // 133
						});                                                                                                          // 135
                                                                                                                   //
						$('.two').on('click', function (e) {                                                                         // 137
								e.preventDefault();                                                                                        // 138
								// 	Sub-nav                                                                                                //
								currentSlideNav = $(this).closest('div');                                                                  // 140
								currentSlideNav.siblings().removeClass('active-slide');                                                    // 141
								currentSlideNav.addClass('active-slide');                                                                  // 142
                                                                                                                   //
								// 	Slides                                                                                                 //
								currentSlide = $('.active-slide.slide');                                                                   // 145
								currentSlide.addClass('recent-slide');                                                                     // 146
                                                                                                                   //
								$(allSlides).removeClass('active-slide');                                                                  // 148
								$(slide2).removeClass('move-right move-left').addClass('active-slide');                                    // 149
                                                                                                                   //
								setTimeout(function () {                                                                                   // 151
										$(slide2).prevAll('.slide').removeClass('move-right').addClass('move-left');                             // 152
										$(slide2).nextAll('.slide').removeClass('move-left').addClass('move-right');                             // 153
								}, 250);                                                                                                   // 154
                                                                                                                   //
								setTimeout(function () {                                                                                   // 156
										currentSlide.removeClass('recent-slide');                                                                // 157
								}, 610);                                                                                                   // 158
						});                                                                                                          // 160
                                                                                                                   //
						$('.three').on('click', function (e) {                                                                       // 162
								e.preventDefault();                                                                                        // 163
								// 	Sub-nav                                                                                                //
								currentSlideNav = $(this).closest('div');                                                                  // 165
								currentSlideNav.siblings().removeClass('active-slide');                                                    // 166
								currentSlideNav.addClass('active-slide');                                                                  // 167
                                                                                                                   //
								// 	Slides                                                                                                 //
								currentSlide = $('.active-slide.slide');                                                                   // 170
								currentSlide.addClass('recent-slide');                                                                     // 171
                                                                                                                   //
								$(allSlides).removeClass('active-slide');                                                                  // 173
								$(slide3).removeClass('move-right move-left').addClass('active-slide');                                    // 174
                                                                                                                   //
								setTimeout(function () {                                                                                   // 176
										$(slide3).prevAll('.slide').removeClass('move-right').addClass('move-left');                             // 177
										$(slide3).nextAll('.slide').removeClass('move-left').addClass('move-right');                             // 178
								}, 250);                                                                                                   // 179
                                                                                                                   //
								setTimeout(function () {                                                                                   // 181
										currentSlide.removeClass('recent-slide');                                                                // 182
								}, 610);                                                                                                   // 183
						});                                                                                                          // 185
                                                                                                                   //
						$('.four').on('click', function (e) {                                                                        // 187
								e.preventDefault();                                                                                        // 188
								// 	Sub-nav                                                                                                //
								currentSlideNav = $(this).closest('div');                                                                  // 190
								currentSlideNav.siblings().removeClass('active-slide');                                                    // 191
								currentSlideNav.addClass('active-slide');                                                                  // 192
                                                                                                                   //
								// 	Slides                                                                                                 //
								currentSlide = $('.active-slide.slide');                                                                   // 195
								currentSlide.addClass('recent-slide');                                                                     // 196
                                                                                                                   //
								$(allSlides).removeClass('active-slide');                                                                  // 198
								$(slide4).removeClass('move-right').addClass('active-slide');                                              // 199
                                                                                                                   //
								setTimeout(function () {                                                                                   // 201
										$(slide4).prevAll('.slide').removeClass('move-right').addClass('move-left');                             // 202
								}, 250);                                                                                                   // 203
                                                                                                                   //
								setTimeout(function () {                                                                                   // 205
										currentSlide.removeClass('recent-slide');                                                                // 206
								}, 610);                                                                                                   // 207
						});                                                                                                          // 209
				}                                                                                                              // 211
                                                                                                                   //
				return componentDidMount;                                                                                      //
		}();                                                                                                             //
                                                                                                                   //
		Hero.prototype.render = function () {                                                                            //
				function render() {                                                                                            //
						return React.createElement(                                                                                  // 214
								'section',                                                                                                 // 215
								{ className: 'slider' },                                                                                   // 215
								React.createElement(                                                                                       // 216
										'nav',                                                                                                   // 216
										{ className: 'controls' },                                                                               // 216
										React.createElement(                                                                                     // 217
												'a',                                                                                                   // 217
												{ className: 'prev', href: '#prev' },                                                                  // 217
												React.createElement('img', { src: 'http://www.jirimaha.com/avg/img/prev.png', alt: 'Previous slide' })
										),                                                                                                       // 217
										React.createElement(                                                                                     // 221
												'a',                                                                                                   // 221
												{ className: 'next', href: '#next' },                                                                  // 221
												React.createElement('img', { src: 'http://www.jirimaha.com/avg/img/next.png', alt: 'Next slide' })     // 223
										)                                                                                                        // 221
								),                                                                                                         // 216
								this.state.latestGames.map(function (item) {                                                               // 228
										console.log(item);                                                                                       // 229
                                                                                                                   //
										return React.createElement(                                                                              // 231
												'div',                                                                                                 // 231
												{ id: item.id, className: 'slide slide-1 active-slide', key: item.id },                                // 231
												React.createElement(                                                                                   // 232
														'div',                                                                                               // 232
														{ className: 'text-content' },                                                                       // 232
														React.createElement(                                                                                 // 233
																'h2',                                                                                              // 233
																{ className: 'green' },                                                                            // 233
																item.name                                                                                          // 233
														),                                                                                                   // 233
														React.createElement(                                                                                 // 234
																'p',                                                                                               // 234
																null,                                                                                              // 234
																item.deck                                                                                          // 234
														)                                                                                                    // 234
												)                                                                                                      // 232
										);                                                                                                       // 231
								})                                                                                                         // 238
						);                                                                                                           // 215
				}                                                                                                              // 243
                                                                                                                   //
				return render;                                                                                                 //
		}();                                                                                                             //
                                                                                                                   //
		return Hero;                                                                                                     //
}(TrackerReact(Component));                                                                                        //
                                                                                                                   //
module.export("default",exports.default=(Hero));                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Nav.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/app/partials/Nav.jsx                                                                                     //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
var Nav = function (_TrackerReact) {                                                                               //
  _inherits(Nav, _TrackerReact);                                                                                   //
                                                                                                                   //
  // Note: In ES6, constructor() === componentWillMount() in React ES5                                             //
                                                                                                                   //
  function Nav() {                                                                                                 // 9
    _classCallCheck(this, Nav);                                                                                    // 9
                                                                                                                   //
    return _possibleConstructorReturn(this, _TrackerReact.call(this));                                             // 9
  }                                                                                                                // 12
                                                                                                                   //
  Nav.prototype.componentDidMount = function () {                                                                  //
    function componentDidMount() {}                                                                                //
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  Nav.prototype.render = function () {                                                                             //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 20
        'div',                                                                                                     // 22
        { className: 'navigation-wrapper' },                                                                       // 22
        React.createElement(                                                                                       // 23
          'a',                                                                                                     // 23
          { href: 'javascript:void(0)', className: 'logo' },                                                       // 23
          React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/placeholder_square.png', alt: 'Logo Image' })
        ),                                                                                                         // 23
        React.createElement(                                                                                       // 26
          'a',                                                                                                     // 26
          { href: 'javascript:void(0)', className: 'navigation-menu-button', id: 'js-mobile-menu' },               // 26
          'MENU'                                                                                                   // 26
        ),                                                                                                         // 26
        React.createElement(                                                                                       // 27
          'nav',                                                                                                   // 27
          { role: 'navigation' },                                                                                  // 27
          React.createElement(                                                                                     // 28
            'ul',                                                                                                  // 28
            { id: 'js-navigation-menu', className: 'navigation-menu show' },                                       // 28
            React.createElement(                                                                                   // 29
              'li',                                                                                                // 29
              { className: 'nav-link' },                                                                           // 29
              React.createElement(                                                                                 // 29
                'a',                                                                                               // 29
                { href: 'javascript:void(0)' },                                                                    // 29
                'Products'                                                                                         // 29
              )                                                                                                    // 29
            ),                                                                                                     // 29
            React.createElement(                                                                                   // 30
              'li',                                                                                                // 30
              { className: 'nav-link' },                                                                           // 30
              React.createElement(                                                                                 // 30
                'a',                                                                                               // 30
                { href: 'javascript:void(0)' },                                                                    // 30
                'About Us'                                                                                         // 30
              )                                                                                                    // 30
            ),                                                                                                     // 30
            React.createElement(                                                                                   // 31
              'li',                                                                                                // 31
              { className: 'nav-link' },                                                                           // 31
              React.createElement(                                                                                 // 31
                'a',                                                                                               // 31
                { href: 'javascript:void(0)' },                                                                    // 31
                'Contact'                                                                                          // 31
              )                                                                                                    // 31
            ),                                                                                                     // 31
            React.createElement(                                                                                   // 32
              'li',                                                                                                // 32
              { id: 'js-navigation-more', className: 'nav-link more' },                                            // 32
              React.createElement(                                                                                 // 32
                'a',                                                                                               // 32
                { href: 'javascript:void(0)' },                                                                    // 32
                'More'                                                                                             // 32
              ),                                                                                                   // 32
              React.createElement(                                                                                 // 33
                'ul',                                                                                              // 33
                { className: 'submenu' },                                                                          // 33
                React.createElement(                                                                               // 34
                  'li',                                                                                            // 34
                  null,                                                                                            // 34
                  React.createElement(                                                                             // 34
                    'a',                                                                                           // 34
                    { href: 'javascript:void(0)' },                                                                // 34
                    'Submenu Item'                                                                                 // 34
                  )                                                                                                // 34
                ),                                                                                                 // 34
                React.createElement(                                                                               // 35
                  'li',                                                                                            // 35
                  null,                                                                                            // 35
                  React.createElement(                                                                             // 35
                    'a',                                                                                           // 35
                    { href: 'javascript:void(0)' },                                                                // 35
                    'Another Item'                                                                                 // 35
                  )                                                                                                // 35
                ),                                                                                                 // 35
                React.createElement(                                                                               // 36
                  'li',                                                                                            // 36
                  { className: 'more' },                                                                           // 36
                  React.createElement(                                                                             // 36
                    'a',                                                                                           // 36
                    { href: 'javascript:void(0)' },                                                                // 36
                    'Item with submenu'                                                                            // 36
                  ),                                                                                               // 36
                  React.createElement(                                                                             // 37
                    'ul',                                                                                          // 37
                    { className: 'submenu' },                                                                      // 37
                    React.createElement(                                                                           // 38
                      'li',                                                                                        // 38
                      null,                                                                                        // 38
                      React.createElement(                                                                         // 38
                        'a',                                                                                       // 38
                        { href: 'javascript:void(0)' },                                                            // 38
                        'Sub-submenu Item'                                                                         // 38
                      )                                                                                            // 38
                    ),                                                                                             // 38
                    React.createElement(                                                                           // 39
                      'li',                                                                                        // 39
                      null,                                                                                        // 39
                      React.createElement(                                                                         // 39
                        'a',                                                                                       // 39
                        { href: 'javascript:void(0)' },                                                            // 39
                        'Another Item'                                                                             // 39
                      )                                                                                            // 39
                    )                                                                                              // 39
                  )                                                                                                // 37
                ),                                                                                                 // 36
                React.createElement(                                                                               // 42
                  'li',                                                                                            // 42
                  { className: 'more' },                                                                           // 42
                  React.createElement(                                                                             // 42
                    'a',                                                                                           // 42
                    { href: 'javascript:void(0)' },                                                                // 42
                    'Another submenu'                                                                              // 42
                  ),                                                                                               // 42
                  React.createElement(                                                                             // 43
                    'ul',                                                                                          // 43
                    { className: 'submenu' },                                                                      // 43
                    React.createElement(                                                                           // 44
                      'li',                                                                                        // 44
                      null,                                                                                        // 44
                      React.createElement(                                                                         // 44
                        'a',                                                                                       // 44
                        { href: 'javascript:void(0)' },                                                            // 44
                        'Sub-submenu'                                                                              // 44
                      )                                                                                            // 44
                    ),                                                                                             // 44
                    React.createElement(                                                                           // 45
                      'li',                                                                                        // 45
                      null,                                                                                        // 45
                      React.createElement(                                                                         // 45
                        'a',                                                                                       // 45
                        { href: 'javascript:void(0)' },                                                            // 45
                        'An Item'                                                                                  // 45
                      )                                                                                            // 45
                    )                                                                                              // 45
                  )                                                                                                // 43
                )                                                                                                  // 42
              )                                                                                                    // 33
            )                                                                                                      // 32
          )                                                                                                        // 28
        ),                                                                                                         // 27
        React.createElement(                                                                                       // 52
          'div',                                                                                                   // 52
          { className: 'navigation-tools' },                                                                       // 52
          React.createElement(                                                                                     // 53
            'div',                                                                                                 // 53
            { className: 'search-bar' },                                                                           // 53
            React.createElement(                                                                                   // 54
              'form',                                                                                              // 54
              { role: 'search' },                                                                                  // 54
              React.createElement('input', { type: 'search', placeholder: 'Enter Search' }),                       // 55
              React.createElement(                                                                                 // 56
                'button',                                                                                          // 56
                { type: 'submit' },                                                                                // 56
                React.createElement('img', { src: 'https://raw.githubusercontent.com/thoughtbot/refills/master/source/images/search-icon.png', alt: 'Search Icon' })
              )                                                                                                    // 56
            )                                                                                                      // 54
          )                                                                                                        // 53
        )                                                                                                          // 52
      );                                                                                                           // 22
    }                                                                                                              // 66
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Nav;                                                                                                      //
}(TrackerReact(Component));                                                                                        //
                                                                                                                   //
module.export("default",exports.default=(Nav));                                                                    //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"Home.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","./partials/Grid.jsx","./partials/Hero.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/app/Home.jsx                                                                                             //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});var Grid;module.import('./partials/Grid.jsx',{"default":function(v){Grid=v}});var Hero;module.import('./partials/Hero.jsx',{"default":function(v){Hero=v}});
                                                                                                                   //
                                                                                                                   //
                                                                                                                   // 1
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
                                                                                                                   // 5
                                                                                                                   // 6
                                                                                                                   //
var Home = function (_TrackerReact) {                                                                              //
  _inherits(Home, _TrackerReact);                                                                                  //
                                                                                                                   //
  // Note: In ES6, constructor() === componentWillMount() in React ES5                                             //
                                                                                                                   //
  function Home() {                                                                                                // 12
    _classCallCheck(this, Home);                                                                                   // 12
                                                                                                                   //
    return _possibleConstructorReturn(this, _TrackerReact.call(this));                                             // 12
  }                                                                                                                // 15
                                                                                                                   //
  Home.prototype.componentDidMount = function () {                                                                 //
    function componentDidMount() {}                                                                                //
                                                                                                                   //
    return componentDidMount;                                                                                      //
  }();                                                                                                             //
                                                                                                                   //
  Home.prototype.render = function () {                                                                            //
    function render() {                                                                                            //
      return React.createElement(                                                                                  // 23
        'div',                                                                                                     // 24
        { id: 'home-wrapper' },                                                                                    // 24
        React.createElement(Hero, null),                                                                           // 25
        React.createElement(Grid, null)                                                                            // 26
      );                                                                                                           // 24
    }                                                                                                              // 30
                                                                                                                   //
    return render;                                                                                                 //
  }();                                                                                                             //
                                                                                                                   //
  return Home;                                                                                                     //
}(TrackerReact(Component));                                                                                        //
                                                                                                                   //
module.export("default",exports.default=(Home));                                                                   //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"layouts":{"main-layout.jsx":["react","react-dom","meteor/ultimatejs:tracker-react","../app/partials/Nav.jsx","../app/partials/Footer.jsx",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// client/layouts/main-layout.jsx                                                                                  //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
module.export({MainLayout:function(){return MainLayout}});var React;module.import('react',{"default":function(v){React=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var TrackerReact;module.import('meteor/ultimatejs:tracker-react',{"default":function(v){TrackerReact=v}});var Nav;module.import('../app/partials/Nav.jsx',{"default":function(v){Nav=v}});var Footer;module.import('../app/partials/Footer.jsx',{"default":function(v){Footer=v}});
                                                                                                                   // 2
                                                                                                                   // 3
                                                                                                                   //
                                                                                                                   // 5
                                                                                                                   // 6
                                                                                                                   //
var MainLayout = function MainLayout(_ref) {                                                                       // 8
    var content = _ref.content;                                                                                    // 8
    return React.createElement(                                                                                    // 8
        'div',                                                                                                     // 10
        { className: 'wrapper-main' },                                                                             // 10
        React.createElement(                                                                                       // 11
            'header',                                                                                              // 11
            { className: 'navigation', role: 'banner' },                                                           // 11
            React.createElement(Nav, null)                                                                         // 12
        ),                                                                                                         // 11
        React.createElement(                                                                                       // 15
            'div',                                                                                                 // 15
            { className: 'wrapper-for-content-outside-of-footer' },                                                // 15
            React.createElement(                                                                                   // 16
                'main',                                                                                            // 16
                null,                                                                                              // 16
                content                                                                                            // 17
            )                                                                                                      // 16
        ),                                                                                                         // 15
        React.createElement(                                                                                       // 21
            'footer',                                                                                              // 21
            { className: 'footer-2', role: 'contentinfo' },                                                        // 21
            React.createElement(Footer, null)                                                                      // 22
        )                                                                                                          // 21
    );                                                                                                             // 10
};                                                                                                                 // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".scss"]});
require("./template.index.js");
require("./client/lib/router.jsx");
require("./client/app/partials/Footer.jsx");
require("./client/app/partials/Grid.jsx");
require("./client/app/partials/Hero.jsx");
require("./client/app/partials/Nav.jsx");
require("./client/app/Home.jsx");
require("./client/layouts/main-layout.jsx");