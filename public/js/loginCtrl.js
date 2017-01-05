angular.module('healing')
.controller('loginCtrl', function($scope, loginService) {

  $scope.login = function() {
    var credentials = {
    	"username": $scope.username,
    	"password": $scope.password,
    }

    loginService.login(credentials)
    .then(function(respone) {
    console.log(response)
      })

  }




})
