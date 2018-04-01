
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
// The following controller should normally be in a separate file!
CodeTaskApp.controller('mainController', function($scope, jsonService) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  jsonService.getData().then(function(data){
    console.log('data: ', data.data);
    $scope.data = data.data;
  });

  // Highcharts.chart('container', {
  //   title: {
  //     text: 'Temperature Data'
  //   },
  //
  //   xAxis: {
  //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  //       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  //     ]
  //   },
  //
  //   series: [{
  //     data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
  //   }]
  // });


});

// The following controller should normally be in a separate file!
CodeTaskApp.controller('secondaryController', function($scope) {

  jsonService.getData().then(function(data){
    console.log('data: ', data.data);
    $scope.data = data.data;
  });

  $scope.message = 'Look! I am an about page.';
});
