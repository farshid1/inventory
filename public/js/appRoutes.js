angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/dashboard.html',
			controller: 'MainController'
		})

		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'UserController'
		})

		.when('/register', {
			templateUrl: 'views/register.html',
			controller: 'UserController'	
		})

		.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
			controller: 'MainController'	
		});

	$locationProvider.html5Mode(true);

}]);