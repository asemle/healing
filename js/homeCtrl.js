angular.module('healing')
.controller('homeCtrl', function($scope, $element, $document) {
  $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 0) {
         $('.glyphicon-chevron-left').fadeOut();
         $('.glyphicon-chevron-right').fadeOut();
     }
     else {
         $('.glyphicon-chevron-left').show();
         $('.glyphicon-chevron-right').show();
     }
   });
   var perc = $('.home').height() * .01;
   $(window).bind('scroll', function() {
      if ($(window).scrollTop() > perc * 2) {
          $('.q1').fadeOut();
      }
      //q2
      if ($(window).scrollTop() > perc * 5 && $(window).scrollTop() < perc * 14) {
          $('.q2').fadeIn();
      }
      else {
          $('.q2').fadeOut();
      }
      //q3
      if ($(window).scrollTop() > perc * 17 && $(window).scrollTop() < perc * 25) {
          $('.q3').fadeIn();
      }
      else {
          $('.q3').fadeOut();
      }
      //q4
      if ($(window).scrollTop() > perc * 28 && $(window).scrollTop() < perc * 37) {
          $('.q4').fadeIn();
      }
      else {
          $('.q4').fadeOut();
      }
      //q5
      if ($(window).scrollTop() > perc * 39 && $(window).scrollTop() < perc * 47) {
          $('.q5').fadeIn();
      }
      else {
          $('.q5').fadeOut();
      }
      //q6
      if ($(window).scrollTop() > perc * 50 && $(window).scrollTop() < perc * 58) {
          $('.q6').fadeIn();
      }
      else {
          $('.q6').fadeOut();
      }
      //q7
      if ($(window).scrollTop() > perc * 60 && $(window).scrollTop() < perc * 71) {
            $('.q7').fadeIn();
      }
      else {
          $('.q7').fadeOut();
      }
        //q8
      if ($(window).scrollTop() > perc * 73 && $(window).scrollTop() < perc * 85) {
          $('.q8').fadeIn(1400);
      }
      else {
          $('.q8').fadeOut();
      }
    });

    //   var vh = $(window).height()/100;
    // $(window).bind('scroll', function() {
    //   var element = $element.find('.firstQ');
    //   if(element.getBoundingClientRect().top < (48*vh)) {
    //     element.fadeOut()
    //   }
    //   else {
    //     console.log(element.offset().top)
    //     console.log(48 * vh)
    //   }
    // })



})
