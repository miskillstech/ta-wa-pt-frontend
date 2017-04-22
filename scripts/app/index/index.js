'use strict';

angular.module('takeAppo.index', ['ngRoute'])
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/index', {
//     templateUrl: 'index/index.html',
//     controller: 'indexCtrl'
//   });
// }])
.controller('indexCtrl', ['$scope','$timeout','$window',function($scope,$timeout,$window) {
	
new WOW().init();
jQuery(document).ready(function() {
   "use strict";
  jQuery('.tp-banner').show().revolution(
  {
    dottedOverlay:"none",
    delay:16000,
    startwidth:1170,
    startheight:700,
    hideThumbs:200,
    thumbWidth:100,
    thumbHeight:50,
    thumbAmount:5,
    navigationType:"bullet",
    navigationArrows:"solo",
    navigationStyle:"preview4",
    touchenabled:"on",
    onHoverStop:"on",
    swipe_velocity: 0.7,
    swipe_min_touches: 1,
    swipe_max_touches: 1,
    drag_block_vertical: false,
    parallax:"scroll",
    parallaxBgFreeze:"on",
    parallaxLevels:[10,7,4,3,2,5,4,3,2,1],
    keyboardNavigation:"off",
    navigationHAlign:"center",
    navigationVAlign:"bottom",
    navigationHOffset:0,
    navigationVOffset:20,
    soloArrowLeftHalign:"left",
    soloArrowLeftValign:"center",
    soloArrowLeftHOffset:20,
    soloArrowLeftVOffset:0,
    soloArrowRightHalign:"right",
    soloArrowRightValign:"center",
    soloArrowRightHOffset:20,
    soloArrowRightVOffset:0,
    shadow:0,
    fullWidth:"on",
    fullScreen:"off",
    spinner:"spinner4",
    stopLoop:"off",
    stopAfterLoops:-1,
    stopAtSlide:-1,
    shuffle:"off",
    autoHeight:"off",           
    forceFullWidth:"off",           
    hideThumbsOnMobile:"off",
    hideNavDelayOnMobile:1500,            
    hideBulletsOnMobile:"off",
    hideArrowsOnMobile:"off",
    hideThumbsUnderResolution:0,
    hideSliderAtLimit:0,
    hideCaptionAtLimit:0,
    hideAllCaptionAtLilmit:0,
    startWithSlide:0,
    videoJsPath:"rs-plugin/videojs/",
    fullScreenOffsetContainer: "" 
  });
}); //ready




$('.categori_block').parallax({

  'elements': [
  {
    'selector': '.categori_block',
    'properties': {
      'x': {
        'background-position-x': {
          'initial': 0,
          'multiplier': 0.1,
          'invert': true
        }
      },
      'y': {
        'background-position-y': {
          'initial': -780,
          'multiplier': 0.1,
          'invert': true
        }
      }
    }
  }
  ]
});
	
		setHeiHeight(); 
$(window).resize( setHeiHeight ); 
	
$scope.takeAppo="WelcomeTo TAke Appo";
}]);