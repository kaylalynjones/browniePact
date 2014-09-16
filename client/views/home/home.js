(function(){
  'use strict';

  angular.module('browniePact')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.brownie = response.data.brownie;

      $interval(function(){
        $scope.brownie = _.shuffle($scope.brownie);
      }, 1000);
    });
  }]);
})();

