(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Food', ['$http', function($http){

    function create(food){
      return $http.post('/foods', food);
    }
    function all(){
      return $http.get('/foods');
    }

    return {create:create, all:all};
  }]);
})();
