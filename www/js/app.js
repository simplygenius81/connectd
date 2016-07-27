
(function(){

  var app = angular.module('Connectd', ['ionic',"youtube-embed"]);
  
  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
     
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
         $cordovaStatusbar.overlaysWebView(true);
         $cordovaStatusBar.style(1); //Light
      }
    });
  })

  app.controller ('videocontroller', function ($scope, $http){

    $scope.initcount=5;

    $scope.ytconfig = {
      key: 'AIzaSyA1_2zfNVd87vIJD3fu6PsEoLbSamnYybs', 
      part: 'id,snippet',
      type: 'video',
      q: 'casey neistat',
      maxResults: '30', 
    }
      

      $http.get('https://www.googleapis.com/youtube/v3/search', {params:$scope.ytconfig}).success(function(response){    
       $scope.videos=response.items;
      });
    })

}());
  
  