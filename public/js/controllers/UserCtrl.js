angular.module('UserCtrl', ['UserService']).controller('UserController', ['$window','$location', 'UserService',

    function ($window, $location, UserService) {

    	//$scope.user = {};
        //$rootScope.isLoggedin = false;
        
angular.module('UserCtrl', ['UserService']).controller('UserController', ['$scope',  'UserService',

    function ($scope, UserService) {

    	$scope.user = {};

    	$scope.submit = function(formData) {
    		console.log($scope.user);
    		$scope.master = angular.copy(formData);

    		UserService.postData($scope.master)
    		.then (
    			function(r) {
				console.log(r.data.role);
                $rootScope.role = r.data.role;

				console.log(r.data);
                
				//$scope.restaurants = angular.copy(r.data);
				//alert('data loaded');
			},
			function (r) {
				alert('failed')
			}
    		)
    	}



    }
]);