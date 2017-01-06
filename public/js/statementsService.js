angular.module("healing")
.service("statementsService", function($http) {
  this.getPayments = function() {
    return $http.get('/payments')
    .then(function(response) {
      return response;
    })
  }
  this.addPayment = function(data) {
    return $http.post('/payments', data)
    .then(function(response) {
      return response;
    })
  }
  this.deletePayment = function(id) {
    return $http.delete('/payments/'+ id)
    .then(function(response) {
      return response;
    })
  }
  this.getAuth = function() {
    console.log('service getting auth');
    return $http({
      method: 'GET',
      url: '/userauth'
    }).then(function(response) {
      return response;
    })
  }
})
