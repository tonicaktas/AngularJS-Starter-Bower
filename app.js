angular.module("myApp",['ngRoute','myApp.page1','myApp.page2'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('!');
  $routeProvider
  .otherwise({
    redirectTo:"/page1"
  })
}]);
