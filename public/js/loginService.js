angular.module("healing")
.service("loginService", function($http, $location) {
  this.login = function(credentials) {
    return $http.post('api/login', credentials)
    .then(function(response) {
      if(response.status === 200) {
        $location.path('/statements');
      }
    })
  }
})
