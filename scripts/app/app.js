'use strict';

// Declare app level module which depends on views, and components
angular.module('takeAppo', [
  'ngRoute',
  'takeAppo.index'
  ]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 $locationProvider.html5Mode(true)
  $routeProvider.when('/', {
    templateUrl: 'index/index.html',
    controller: 'indexCtrl'
  });
 $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
  // $locationProvider.hashPrefix('!');
  // $routeProvider.otherwise({redirectTo: '/index'});
  
}]);
