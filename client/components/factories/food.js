(function(){
  'use strict';

  angular.module('browniePact')
  .factory('Bookmark', ['$http', function($http){

    function create(bookmark){
      return $http.post('/bookmarks/add', bookmark);
    }

    return {create:create};
  }]);
})();
