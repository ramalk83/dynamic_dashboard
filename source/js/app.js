
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

  // Sample options for first chart
  $scope.chartOptions = {
      title: {
          text: 'Random data'
      },

      chart: {
        width: 320,
        height: 280,
      },

      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  };

  // Sample data for pie chart
  $scope.pieData = [{
          name: "Microsoft Internet Explorer",
          y: 56.33
      }, {
          name: "Chrome",
          y: 24.03,
          sliced: true,
          selected: true
      }, {
          name: "Firefox",
          y: 10.38
      }, {
          name: "Safari",
          y: 4.77
      }, {
          name: "Opera",
          y: 0.91
      }, {
          name: "Proprietary or Undetectable",
          y: 0.2
  }]


});

// The following controller should normally be in a separate file!
CodeTaskApp.controller('secondaryController', function($scope, jsonService) {

  $scope.items = [];

  jsonService.getData().then(function(items){
    $scope.items = items.data;
    console.log('data: ', $scope.items);
  });

  // Sample options for first chart
  $scope.chartOptions = {
      title: {
          text: 'More random data'
      },

      chart: {
        width: 320,
        height: 280,
      },

      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
              'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },

      series: [{
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }]
  };

  // Sample data for pie chart
  $scope.pieData = [{
          name: "Microsoft Internet Explorer",
          y: 56.33
      }, {
          name: "Chrome",
          y: 24.03,
          sliced: true,
          selected: true
      }, {
          name: "Firefox",
          y: 10.38
      }, {
          name: "Safari",
          y: 4.77
      }, {
          name: "Opera",
          y: 0.91
      }, {
          name: "Proprietary or Undetectable",
          y: 0.2
  }]

});
