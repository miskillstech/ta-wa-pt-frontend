'use strict';

angular.module('takeAppo.index', ['ngRoute'])
// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/index', {
//     templateUrl: 'index/index.html',
//     controller: 'indexCtrl'
//   });
// }])
.controller('indexCtrl', ['$scope',function($scope) {
$scope.takeAppo="WelcomeTo TAke Appo";
}]);