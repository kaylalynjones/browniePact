(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Exercise', ['$http', function($http){

    function create(exercise){
      return $http.post('/exercise', exercise);
    }
    function all(){
      return $http.get('/exercise');
    }

    return {create:create, all:all};
  }]);
})();
