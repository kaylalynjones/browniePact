(function(){
  'use strict';

  angular.module('browniePact')
  .controller('ProfileCtrl', ['$scope', 'Profile', function($scope, Profile){



    $scope.addProfile = function(){
      Profile.update($scope.user).then(function(response){
      });
    };
  }]);
})();
