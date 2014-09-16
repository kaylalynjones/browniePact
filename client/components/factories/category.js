(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Category', ['$http', function($http){

    function create(category){
      return $http.post('/bookmarks/categories', category);
    }
    function all(){
      return $http.get('/bookmarks');
    }

    return {create:create, all:all};
  }]);
})();
