(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Food', ['$http', function($http){

    function create(food){
      return $http.post('/food', food);
    }
    function all(){
      return $http.get('/food');
    }

    return {create:create, all:all};
  }]);
})();
