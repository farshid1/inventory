angular.module('LoginCtrl', ['LoginService']).controller('LoginController', ['$window','$location', 'LoginService',

    function ($window, $location, LoginService) {

      $scope.message = '';
        //$rootScope.isLoggedin = false;
        
      $scope.submit = function(formData) {
        $scope.master = angular.copy(formData);

        UserService.postData($scope.master)
        .then (
          function(res) {
            $window.sessionStorage.token = res.data.token;
            $location.path('/dashboard');
          },
          function (res) {
            // Erase the token if the user fails to log in
            delete $window.sessionStorage.token;
            // Handle login errors here
            $scope.message = 'Error: Invalid user or password';
            alert('failed');
          }
        )
        }



    }
]);