(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Profile', ['$http', function($http){

    function update(user){
      return $http.post('/profiles', user);
    }

    return {update:update};
  }]);
})();
