angular.module('healing')
.controller('testimonialsCtrl', function($scope, $interval) {

  // $('.testWrap').bind('scroll', function() {
  //    if ($('.testWrap').scrollTop() > 0) {
  //        $('header').fadeOut();
  //    }
  //    else {
  //        $('header').show();
  //    }
  //  });

   $('.background').bind('scroll', function() {
      if ($('.background').scrollTop() > 0) {
          $('header').fadeOut();
      }
      else {
          $('header').show();
      }
    });

  var testimonials = [
    {
      quote: "Thanks for clearing up several issues during our call last night. I had the best nights sleep and woke up with a great feeling and weight off of my mind and body. You are amazing and I greatly appreciate your soulful talent. You are a light from above.",
      client: " - Scot W"
    },
    {
      quote: "You have helped me tremendously with the Candida and my sinus issues, both decade long problems. It has literally been life changing. I have never felt better physically or emotionally!",
      client: " - Maria M"
    },
    {
      quote: "Feeling a lot better. Slept like a rock. No pain in hip or lower back. Hot flashes are quiet. Have an all around sense of relief. Thank you so much!",
      client: " - Andrea G"
    },
    {
      quote: "My posture is much better and the treatment we did really resonated with me about the 8 year old trauma and not having to protect myself anymore.",
      client: " - Amy N"
    },
    {
      quote: "I feel like I just put down a bag of bricks! It's been easier lately to be less judgemental of my body, it feels so much better when I am more accepting of myself so I can focus on other things.",
      client: " - B"
    },
    {
      quote: "The pain and discomfort in the hips is completely gone. I no longer have trouble walking after two hip replacements.",
      client: " - Jason"
    },
    {
      quote: "Not only am I feeling better and sleeping more soundly, I was able to cancel my root canal.",
      client: " - Kaye P"
    },
    {
      quote: "I went to the eye doctor this morning for a routine exam and my eyes are no longer in need of glasses, like I can throw them away",
      client: " - AN"
    },
    {
      quote: "The fact that I made it through a super stressful week on top of what happens to be a PMS week without landing in a miserable crying heap is no coincidence!",
      client: " - B"
    },
    {
      quote: "I just want to thank you so much-your treatments have helped my allergies, arthritis, and Lyme (which I didn't even know I had). I'm sleeping and feeling much better now...very grateful! Continue your great work!",
      client: " - Maureen D"
    }
  ]
  $scope.testimonials = testimonials;

  var count = 0;
  $scope.mainTest = testimonials[0]
  $interval(function() {
    if(count === testimonials.length - 1) {
      count = 0
    }
    else {
      count += 1;
    }
    $scope.mainTest = testimonials[count]
  },10000)
})
