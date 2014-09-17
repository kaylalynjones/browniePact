(function(){
  'use strict';

  angular.module('browniePact')
  .controller('DailyInputsCtrl', ['$scope', 'Food', 'Exercise', function($scope, Food, Exercise){
    $scope.foods = [];
    $scope.food = {};
    $scope.exercises = [];
    $scope.exercise ={};
    $scope.activities = [];

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
        $scope.exercise = {};
      });
    };

    Exercise.all().then(function(response){
      $scope.exercises = response.data.exercises;
      $scope.activities = response.data.activities;
    });

  }]);
})();
