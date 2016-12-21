angular.module('healing')
.controller('contactCtrl', function($scope) {

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
