
// create the module and name it CodeTaskApp
var CodeTaskApp = angular.module('CodeTaskApp', ['ngRoute']);

// configure page routes
CodeTaskApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/homePage.html',
      controller  : 'mainController'
    })

    // route for the home page
    .when('/home', {
      templateUrl : 'pages/homePage.html',
      controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/secondaryPage.html',
      controller  : 'secondaryController'
    })

});

// create the controller and inject Angular's $scope
// The following controller should normally be in a separate filechartDirective
CodeTaskApp.controller('mainController', function($scope, jsonService) {

  $scope.items = [];

  jsonService.getData().then(function(items){
    $scope.items = items.data;
    console.log('data: ', $scope.items);
  });

});

// The following controller should normally be in a separate file!
CodeTaskApp.controller('secondaryController', function($scope, jsonService) {

  $scope.items = [];

  jsonService.getData().then(function(items){
    $scope.items = items.data;
    console.log('data: ', $scope.items);
  });

});
