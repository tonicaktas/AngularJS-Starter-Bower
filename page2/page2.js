angular.module("myApp.page2",['ngRoute'])
.config(['$routeProvider',function($routeProvider){
  $routeProvider
  .when("/page2",{ // när denna url så gäller:
    templateUrl:"page2/page2.html", // visa denna templateUrl
    controller:"page2Ctrl" // denna controller gäller för denna templateUrl
  })
}])
.controller('page2Ctrl',function(){ // controller med funktioner
  console.log('page2');
});
