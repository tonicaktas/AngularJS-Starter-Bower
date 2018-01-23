angular.module("myApp",['ngRoute','myApp.page1','myApp.page2'])
.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){ // lägger till route 
  $locationProvider.hashPrefix('!');
  $routeProvider
  .otherwise({
    redirectTo:"/page1" // redirect to startPage om inget annat
  })
}]);
