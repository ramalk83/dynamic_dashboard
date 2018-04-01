// Define factory
angular.module('CodeTaskApp').factory('jsonService', function($http) {
			var factory = {};
    	factory.getData = function() {
          return $http.get('../jsonConfig.json');
      };
      return factory;
});
