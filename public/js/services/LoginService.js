'use strict';

//Articles service used for articles REST endpoint
angular.module('LoginService', []).factory('LoginService',['$http','$q', function( $http, $q) {



	return { 
		postData: function(formData) {
			return $http({
				url: '/authenticate',
				data: JSON.stringify(formData),
				method: 'POST',
				header: {'Content-Type':'application/json'}
			});
		}
	}

}]);