angular.module('UserCtrl', ['UserService']).controller('UserController', ['$window','$location', 'UserService',

    function ($window, $location, UserService) {

    	//$scope.user = {};
        //$rootScope.isLoggedin = false;
        
    	$scope.submit = function(formData) {
    		$scope.master = angular.copy(formData);

    		UserService.postData($scope.master)
    		.then (
    			function(r) {
				console.log(r.data.role);
                $rootScope.role = r.data.role;

			},
			function (r) {
				alert('failed')
			}
    		)
    	}



    }
]);