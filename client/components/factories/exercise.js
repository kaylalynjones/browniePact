(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Exercise', ['$http', function($http){

    function create(exercise){
      return $http.post('/exercises', exercise);
    }
    function all(){
      return $http.get('/exercises');
    }

    return {create:create, all:all};
  }]);
})();
