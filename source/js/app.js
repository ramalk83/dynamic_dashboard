// (function () {
//     angular.module('CodeTaskApp', ['ngRoute']);
//
//
//
//
//     angular.module('CodeTaskApp').controller('MainController', function ($scope, venuesSearchService) {
//     });
//
// })();


// create the module and name it CodeTaskApp
var CodeTaskApp = angular.module('CodeTaskApp', ['ngRoute']);

// configure our routes
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
CodeTaskApp.controller('mainController', function($scope, jsonService) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';

  var _this = this;

  jsonService.getData().then(function(response){
      //do something with response
      _this.data = response.data;
  }).catch(function(response){
    //handle the error
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

CodeTaskApp.controller('secondaryController', function($scope) {
  $scope.message = 'Look! I am an about page.';
});
