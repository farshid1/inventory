<<<<<<< HEAD
angular.module('UserCtrl', ['UserService']).controller('UserController', ['$window','$location', 'UserService',

    function ($window, $location, UserService) {

    	//$scope.user = {};
        //$rootScope.isLoggedin = false;
        
=======
angular.module('UserCtrl', ['UserService']).controller('UserController', ['$scope',  'UserService',

    function ($scope, UserService) {

    	$scope.user = {};

>>>>>>> FETCH_HEAD
    	$scope.submit = function(formData) {
    		console.log($scope.user);
    		$scope.master = angular.copy(formData);

    		UserService.postData($scope.master)
    		.then (
    			function(r) {
<<<<<<< HEAD
				console.log(r.data.role);
                $rootScope.role = r.data.role;

=======
				console.log(r.data);
                
				//$scope.restaurants = angular.copy(r.data);
				//alert('data loaded');
>>>>>>> FETCH_HEAD
			},
			function (r) {
				alert('failed')
			}
    		)
    	}



    }
]);