angular.module("healing")
.controller('payCtrl', function($scope, $state) {
  $('.background').bind('scroll', function() {
     if ($('.background').scrollTop() > 0) {
         $('header').fadeOut('fast');
     }
     else {
         $('header').show();
     }
   });

   $(".cc").keyup(function () {
       if (this.value.length == this.maxLength) {
         $(this).next('.cc').focus();
       }
     });


  function stripeResponseHandler(status, response) {
    if (response.error) {
      $('#charge-error').show();
      $('.payment-errors').text(response.error.message);
      $('.submit').removeAttr('disabled');
    } else {
      const $form = $('#payment-form');
      const token = response.id;
      console.log(response.id)
      $form.append('<input type="hidden" name="stripeToken" value="' + token + '"/>');
      $form.get(0).submit()
    }
  }


     $(function() {
       const $form = $('#payment-form');
       $form.submit(function(event) {
         $('.payment-errors').hide();
         // Disable the submit button to prevent repeated clicks:
        $form.find('.submit').prop('disabled', true);

      // Request a token from Stripe:
        Stripe.card.createToken($form, stripeResponseHandler);

      // Prevent the form from being submitted:
        return false;
      });
    });

})
