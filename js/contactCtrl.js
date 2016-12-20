angular.module('healing')
.controller('contactCtrl', function($scope) {

  $(document).ready(function(){
      $('[data-toggle="popover"]').popover();
  });

  $('.connection').bind('scroll', function() {
     if ($('.connection').scrollTop() > 0) {
         $('.main-nav').fadeOut();
         $('.connect').fadeOut();
     }
     else {
         $('.main-nav').show();
         $('.connect').show();
     }
   });

})
