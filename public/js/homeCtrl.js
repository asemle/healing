angular.module('healing')
.controller('homeCtrl', function($scope, $element, $document) {
  var $mainNav = $('.main-nav');
  var $connect = $('.connect')
  var $background = $('.background');
  $mainNav.show();
  $connect.show();
  $background.scrollTop(0);
  $background.unbind('scroll');
  $background.bind('scroll', function() {
     if ($background.scrollTop() > 0) {
         $('.glyphicon-chevron-left').fadeOut();
         $('.glyphicon-chevron-right').fadeOut();
     }
     else {
         $('.glyphicon-chevron-left').show();
         $('.glyphicon-chevron-right').show();
     }
   });

   var $q1 = $('.q1');
   var $q2 = $('.q2');
   var $q3 = $('.q3');
   var $q4 = $('.q4');
   var $q5 = $('.q5');
   var $q6 = $('.q6');
   var $q7 = $('.q7');
   var $q8 = $('.q8');
   var $q9 = $('.q9');

   var perc = $('.home').height() * .01;

   $background.bind('scroll', function() {
     if ($background.scrollTop() < perc * 2) {
         $q1.css("opacity", "1");
     }
      if ($background.scrollTop() > perc * 6) {
          $q1.css("opacity", "0.1")
      }
      //q2
      if ($background.scrollTop() > perc * 3 && $background.scrollTop() < perc * 14) {
          $q2.css("opacity", "1")
      }
      else {
          $q2.css("opacity", "0.1")
      }
      //q3
      if ($background.scrollTop() > perc * 7 && $background.scrollTop() < perc * 30) {
          $q3.css("opacity", "1")
      }
      else {
          $q3.css("opacity", "0.1")
      }
      //q4
      if ($background.scrollTop() > perc * 24 && $background.scrollTop() < perc * 44) {
          $q4.css("opacity", "1")
      }
      else {
          $q4.css("opacity", "0.1")
      }
      //q5
      if ($background.scrollTop() > perc * 32 && $background.scrollTop() < perc * 56) {
          $q5.css("opacity", "1")
      }
      else {
          $q5.css("opacity", "0.1")
      }
      //q6
      if ($background.scrollTop() > perc * 40 && $background.scrollTop() < perc * 66) {
          $q6.css("opacity", "1")
      }
      else {
          $q6.css("opacity", "0.1")
      }
      //q7
      if ($background.scrollTop() > perc * 52 && $background.scrollTop() < perc * 78) {
            $q7.css("opacity", "1")
      }
      else {
          $q7.css("opacity", "0.1")
      }
        //q8
      if ($background.scrollTop() > perc * 70 && $background.scrollTop() < perc * 84) {
          $q8.css("opacity", "1")
      }
      else {
          $q8.css("opacity", "0.1")
      }
      if ($background.scrollTop() > perc * 84 && $background.scrollTop() <= perc * 100) {
          $q9.css("opacity", "1");
      }
      // else {
      //   $('.q9').css("opacity", "0")
      // }
      if ($background.scrollTop() >= perc * 88) {
        $q1.css("opacity", "0.5")
        $q2.css("opacity", "0.5")
        $q3.css("opacity", "0.5")
        $q4.css("opacity", "0.5")
        $q5.css("opacity", "0.5")
        $q6.css("opacity", "0.5")
        $q7.css("opacity", "0.5")
        $q8.css("opacity", "1")
        $q9.css("opacity", "1");
      }

    });

})
