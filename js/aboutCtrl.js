angular.module('healing')
.controller('aboutCtrl', function($scope) {
  $('.aboutWrap').bind('scroll', function() {
     if ($('.aboutWrap').scrollTop() > 0) {
         $('.main-nav').fadeOut('fast');
         $('.connect').fadeOut('fast');
     }
     else {
         $('.main-nav').show();
         $('.connect').show();
     }
   });
})
