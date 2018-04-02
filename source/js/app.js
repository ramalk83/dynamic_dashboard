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

// create the controller and inject Angular's $scope and get factory
// The following controller should normally be in a separate filechartDirective
CodeTaskApp.controller('mainController', function($scope, jsonService) {

   $scope.items = [];
   $scope.IsDisplay = false;
   $scope.titleChart = '';
   // get data from json file
   jsonService.getData().then(function(items){
     $scope.items = items.data;
   });

   $scope.clickMe = function (clicked) {
      if ($scope.chartType === 0) {
        var newItem = {
          "number": "0",
          "class": "col-md-4",
          "styler": "height: 350px; color: #000; border-radius: 6px;",
          "title": $scope.titleChart,
          "description": "new chart",
          "chart": "hc-chart"
        };
        $scope.items.push(newItem);

      } else if ($scope.chartType === 1) {
        var newItem = {
          "number": "0",
          "class": "col-md-8",
          "styler": "height: 350px; color: #000; border-radius: 6px;",
          "title": $scope.titleChart,
          "description": "new chart",
          "chart": "hc-pie-chart"
        };
        $scope.items.push(newItem);
      }
   };

  // Sample options for first chart
  $scope.chartOptions = {
      title: {
          text: null
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
          data: [29.9, 71.5, 106.4, 119.2, 134.0, 176.0, 135.6, 148.5, 100.4, 124.1, 95.6, 54.4]
      }]
  };

  // Hardcode line chart Data
  $scope.pieData = [{
          name: "Internet Explorer",
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
  }];
  // Create new report
  $scope.export = function(){
     html2canvas(document.getElementById('homePageId'), {
         onrendered: function (canvas) {
             var data = canvas.toDataURL();
             var docDefinition = {
                 content: [{
                     image: data,
                     width: 500,
                 }]
             };
             pdfMake.createPdf(docDefinition).download("report.pdf");
         }
     });
  }

});

// The following controller should normally be in a separate file!
// create the controller and inject Angular's $scope and get factory for secondary controller
CodeTaskApp.controller('secondaryController', function($scope, jsonService) {

  $scope.items = [];
  $scope.IsDisplay = false;
  $scope.titleChart = '';

 jsonService.getData().then(function(items){
   $scope.items = items.data;
 });

 $scope.clickMe = function (clicked) {
    if ($scope.chartType === 0) {
      var newItem = {
        "number": "1",
        "class": "col-md-4",
        "styler": "height: 350px; color: #000; border-radius: 6px;",
        "title": $scope.titleChart,
        "description": "new chart",
        "chart": "hc-chart"
      };
      $scope.items.push(newItem);

    } else if ($scope.chartType === 1) {
      var newItem = {
        "number": "1",
        "class": "col-md-8",
        "styler": "height: 350px; color: #000; border-radius: 6px;",
        "title": $scope.titleChart,
        "description": "new chart",
        "chart": "hc-pie-chart"
      };
      $scope.items.push(newItem);
    }

 };

  // Hardcode line chart Data
  $scope.chartOptions = {
      title: {
          text: null
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
          data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 116.4, 194.1, 95.6, 54.4]
      }]
  };

  // Hardcode pie chart Data
  $scope.pieData = [{
          name: "Staging",
          y: 36.33
      }, {
          name: "Usage",
          y: 44.03,
          sliced: true,
          selected: true
      }, {
          name: "Testing",
          y: 10.38
      }, {
          name: "Coding",
          y: 4.77
      }, {
          name: "QA",
          y: 0.91
      }, {
          name: "Integration",
          y: 0.2
  }];
  // Create new report
  $scope.export = function(){
     html2canvas(document.getElementById('secondaryPageId'), {
         onrendered: function (canvas) {
             var data = canvas.toDataURL();
             var docDefinition = {
                 content: [{
                     image: data,
                     width: 500,
                 }]
             };
             pdfMake.createPdf(docDefinition).download("report.pdf");
         }
     });
  }

});
