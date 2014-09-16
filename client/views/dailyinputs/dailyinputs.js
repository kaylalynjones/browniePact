(function(){
  'use strict';

  angular.module('browniePact')
  .controller('DailyInputsCtrl', ['$scope', function($scope){
    $scope.foods = [];
    $scope.exercises = [];
    $scope.food = {};
    $scope.exercise ={};

    $scope.addFood = function(){
      Food.create($scope.food).then(function(response){
        $scope.foods.push(response.data.food);
        $scope.food = {};
      });
    };

    Food.all().then(function(response){
      $scope.foods = response.data.foods;
    });

    $scope.addExercise = function(){
      Exercise.create($scope.exercise).then(function(response){
        $scope.exercises.push(response.data.exercise);
        $scope.food = {};
      });
    };

    Exercise.all().then(function(response){
      $scope.exercises = response.data.exercises;
    });

  }]);
})();
