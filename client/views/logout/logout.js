(function(){
  'use strict';

  angular.module('browniePact')
  .controller('LogoutCtrl', ['$location',  'User', function($location, User){
    User.logout().then(function(){
      toastr.info('You are now logged out.');
      $location.path('/');
    });
  }]);

})();
