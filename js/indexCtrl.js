angular.module('healing')
.controller('indexCtrl', function($scope) {
  var backgrounds = [{'background-image': 'url(css/media/benchPond.gif)'}, {'background-image':'url(css/media/rollingClouds.gif)'}, {'background-image': 'url(css/media/snowFalling.gif)'}, {'background-image':'url(css/media/beachWaves.gif)'}, {'background-image':'url(css/media/forestStream.gif)'}, {'background-image':'url(css/media/momBeach.gif)'}, {'background-image':'url(css/media/river.jpg)'}, {'background-image':'url(css/media/beachSand.gif)'}]
  var count = 0;
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
