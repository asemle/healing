angular.module("healing")
.controller('statementsCtrl', function($scope, statementsService, $filter) {
  statementsService.getPayments()
  .then(function(response) {
    $scope.payments = response.data
  })

  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('header').fadeOut('fast');
     }
     else {
         $('header').show();
     }
   });

  $scope.addPayment = function() {

    var date = $filter('date')($scope.date, 'yyyy-MM-dd HH:mm:ss', 'EST')

    var req = {
      "sender": $scope.sender,
      "amount": $scope.amount,
      "date": date,
      "description" : $scope.description
    }
    statementsService.addPayment(req)
      .then(function(response) {
        $scope.payments = response.data
        $scope.sender = undefined;
        $scope.amount = undefined;
        $scope.date = undefined;
        $scope.description = undefined;

      })
    }
    $scope.deletePayment = function(id) {
      statementsService.deletePayment(id)
      .then(function(response) {
        $scope.payments = response.data;
      })
    }
})
