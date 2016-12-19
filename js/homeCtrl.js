angular.module('healing')
.controller('homeCtrl', function($scope, $element, $document) {
  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('.glyphicon-chevron-left').fadeOut();
         $('.glyphicon-chevron-right').fadeOut();
     }
     else {
         $('.glyphicon-chevron-left').show();
         $('.glyphicon-chevron-right').show();
     }
   });
   var perc = $('.home').height() * .01;
   $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() < perc * 2) {
         $('.q1').show();
     }
      if ($('.background').scrollTop() > perc * 2) {
          $('.q1').fadeOut();
      }
      //q2
      if ($('.background').scrollTop() > perc * 5 && $('.background').scrollTop() < perc * 14) {
          $('.q2').fadeIn();
      }
      else {
          $('.q2').fadeOut();
      }
      //q3
      if ($('.background').scrollTop() > perc * 17 && $('.background').scrollTop() < perc * 25) {
          $('.q3').fadeIn();
      }
      else {
          $('.q3').fadeOut();
      }
      //q4
      if ($('.background').scrollTop() > perc * 28 && $('.background').scrollTop() < perc * 37) {
          $('.q4').fadeIn();
      }
      else {
          $('.q4').fadeOut();
      }
      //q5
      if ($('.background').scrollTop() > perc * 39 && $('.background').scrollTop() < perc * 47) {
          $('.q5').fadeIn();
      }
      else {
          $('.q5').fadeOut();
      }
      //q6
      if ($('.background').scrollTop() > perc * 50 && $('.background').scrollTop() < perc * 58) {
          $('.q6').fadeIn();
      }
      else {
          $('.q6').fadeOut();
      }
      //q7
      if ($('.background').scrollTop() > perc * 60 && $('.background').scrollTop() < perc * 71) {
            $('.q7').fadeIn();
      }
      else {
          $('.q7').fadeOut();
      }
        //q8
      if ($('.background').scrollTop() > perc * 72 && $('.background').scrollTop() < perc * 100) {
          $('.q8').fadeIn(1400);
      }
      else {
          $('.q8').fadeOut();
      }
    });

    //   var vh = $('.background').height()/100;
    // $('.background').bind('scroll', function() {
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
