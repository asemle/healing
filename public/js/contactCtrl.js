angular.module('healing')
.controller('contactCtrl', function($scope, contactService) {

$scope.submit = function() {
  var form = {
  	name: $scope.firstName + " " + $scope.lastName,
  	email: $scope.email,
  	message: $scope.comment
  }

  contactService.submit(form)
  .then(function(respone) {
    $('.contact-form').hide(function() {
      $('.firstName').val('')
      $('.lastName').val('')
      $('.emailBox').val('')
      $('.comment').val('')
      $('.contact-form').fadeIn("slow");

    })
  })
}


//         <span class="glyphicon glyphicon-remove-circle" ng-click="$('.background').scrollTop(0);" ui-sref="home"></span>
//         <h4>Fill out the form below for questions or to schedule an appointment. <br>Phone sessions or in-person visits are available at your convenience.</h4>
//         <h5>Name</h5>
//         <input type="text" class="firstName" ng-model='firstName' placeholder="First"><input type="text" class="lastName" ng-model='lastName' placeholder="Last">
//         <h5>Email  <span class="glyphicon glyphicon-question-sign" data-toggle="popover" data-placement="right" data-content="Please email me with any questions.  If you would like a call back please include your phone number and best time to call."  data-placement="top" data-trigger="hover"></span></h5>
//         <input type="text" class="emailBox" ng-model="email" placeholder="Email">
//         <h5>Comment</h5>
//         <textarea name="comment" class='comment' ng-model='comment' placeholder="Comment"></textarea>
//         <button type="button" name="button" ng-click="submit()">Send</button>
//     </div>
//   </div>
// </div>

  // var sending = function() {
  //
  // $scope.firstName = undefined;
  // $scope.lastName = undefined;
  // $scope.email = undefined;
  // $scope.comment = undefined;
  // // $('.contact-form').animate({
  // //   height: 'auto',
  // //   width: 'auto'
  // // },500)
  // sending();


  $scope.gotoTop = function() {
  $('.background').scrollTop(0);
}
$scope.gotoTop();
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
