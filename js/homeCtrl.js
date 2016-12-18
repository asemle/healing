angular.module('healing')
.controller('homeCtrl', function($scope, $element, $document) {
  $(window).bind('scroll', function() {
     if ($(window).scrollTop() > 0) {
         $('.glyphicon').fadeOut();
     }
     else {
         $('.glyphicon').show();
     }
   });

   $(window).bind('scroll', function() {
      if ($(window).scrollTop() > 0) {
          $('.Q1').fadeOut();
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
