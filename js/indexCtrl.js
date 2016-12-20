angular.module('healing')
.controller('indexCtrl', function($scope, $state) {
  var state;
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    $scope.state = $state.current.name;
    console.log($scope.state)
  });

  var backgrounds = [{'background-image':'url(css/media/reeds.gif)'}, {'background-image': 'url(css/media/benchPond.gif)', 'background-position': 'center'}, {'background-image':'url(css/media/rollingClouds.gif)'}, {'background-image': 'url(css/media/snowFalling.gif)'}, {'background-image':'url(css/media/beachWaves.gif)'}, {'background-image':'url(css/media/river.jpg)'}, {'background-image':'url(css/media/beachSand.gif)'}, {'background-image':'url(css/media/jungle.gif)', 'background-position': 'left'} ]
  // var colors = [{'color':'brown'}, {'color':'white'}, {'color':''}, {'color':''}, {'color':''}, {'color':''}, {'color':''}, {'color':''}]
  var count = 0;
  $scope.backgroundStyle = backgrounds[count]
  $scope.changeBackgroundLeft = function() {
    if(count === 0) {
      count = backgrounds.length - 1;
    }
    else {
      count--;
    }
    $scope.backgroundStyle = backgrounds[count];
  }

  $scope.changeBackgroundRight = function() {
    if(count === backgrounds.length -1) {
      count = 0;
    }
    else {
      count ++
    }
    $scope.backgroundStyle = backgrounds[count];
  }

})
