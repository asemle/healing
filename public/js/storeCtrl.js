angular.module('healing')
.controller('storeCtrl', function($scope) {
  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('header').fadeOut('fast');
     }
     else {
         $('header').show();
     }
   });

 //   var handler = StripeCheckout.configure({
 //   key: 'pk_test_kVcN290woepedGKOFhaRWZyp',
 //   image: '../css/media/lotus.jpg',
 //   locale: 'auto',
 //   zipCode: true,
 //   token: function(token) {
 //     // You can access the token ID with `token.id`.
 //     // Get the token ID to your server-side code for use.
 //   }
 // });
 //
 // document.getElementById('customButton').addEventListener('click', function(e) {
 //   // Open Checkout with further options:
 //   handler.open({
 //     name: 'healingwithlisa',
 //     amount: 88,
 //
 //   });
 //   e.preventDefault();
 // });
 //
 // // Close Checkout on page navigation:
 // window.addEventListener('popstate', function() {
 //   handler.close();
 // });


})
