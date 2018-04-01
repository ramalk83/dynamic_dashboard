// Define factory
angular.module('CodeTaskApp').factory('jsonService', function($http) {
    // hardcode json as it is a static call
	  var url = '../jsonConfig.json';
    return {
        getData: function(){
            return $http.jsonp(url);
        }
    }
});
