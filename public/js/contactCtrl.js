angular.module('healing')
.controller('contactCtrl', function($scope, contactService) {

console.log($scope.firstName);
console.log($scope.lastName);
console.log($scope.email);
console.log($scope.comment);

$scope.submit = function() {

  // console.log($scope.firstName);
  // console.log($scope.lastName);
  // console.log($scope.email);
  // console.log($scope.comment);

  var form = {
  	name: $scope.firstName,
  	email: $scope.email,
  	message: $scope.comment
  }

  contactService.submit(form)
  .then(function(respone) {

  })
}

  $scope.gotoTop = function() {
  $('.background').scrollTop(0);
}
$scope.gotoTop();
  $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
  });

  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('.main-nav').fadeOut();
         $('.connect').fadeOut();
     }
     else {
         $('.main-nav').show();
         $('.connect').show();
     }
   });

})
