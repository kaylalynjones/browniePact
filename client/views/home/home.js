(function(){
  'use strict';

  angular.module('browniePact')
  .controller('HomeCtrl', ['$scope', '$interval', 'Home', function($scope, $interval, Home){
    Home.getMessage().then(function(response){
      $scope.pleasures = response.data.brownie;

      $interval(function(){
        $scope.pleasure = _.shuffle($scope.pleasures)[0];
      }, 1000);
    });
  }]);
})();

