angular.module('healing')
.service('contactService', function($http) {
  this.submit = function(content) {
      // return $http.post('/contacted', content)
      // .then(function (response) {
      //   console.log(reponse);
      // })
      return $http({
   method: 'POST',
   url: '/contacted',
   headers: {
       'Content-Type': 'application/json', 
       'Accept': 'application/json'
   },
   data: content
 }).then(function(response) {
   return response
 })
};
})
