(function(){
  'use strict';

  angular.module('browniePact')
  .factory('User', ['$http', function($http){

    function register(user){
      return $http.post('/register', user);
    }
    function login(user){
      return $http.post('/login', user);
    }
    function logout(){
      return $http.delete('/logout');
    }
    function find(){
      return $http.get('/users');
    }

    return {register:register, login:login, logout:logout, find:find};
  }]);
})();

