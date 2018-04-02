
var CodeTaskApp = angular.module('CodeTaskApp');
    // Directive for generic chart, pass in chart options
    CodeTaskApp.directive('hcChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], scope.options);
            }
        };
    })

    // Directive for pie charts, pass in title and data only
    // Directive for pie charts, pass in title and data only
    .directive('hcPieChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: scope.title
                    },
                    plotOptions: {
                        pie: {
                            size: "50%",
                            center: ['62%', '30%'],
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        data: scope.data
                    }]
                });
            }
        };
    })
