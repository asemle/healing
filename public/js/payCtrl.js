angular.module("healing")
.controller('payCtrl', function($scope) {
  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('header').fadeOut('fast');
     }
     else {
         $('header').show();
     }
   });

})
