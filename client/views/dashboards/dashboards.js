(function(){
  'use strict';

  angular.module('browniePact')
  .controller('DashboardsCtrl', ['$scope', 'Food', 'Exercise', 'User', function($scope, Food, Exercise, User){

    $scope.foods = [];
    $scope.food = {};
    $scope.exercises = [];
    $scope.exercise ={};
    $scope.activities = [];
    $scope.date = new Date();
    $scope.exerciseCalories = [];

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
    });

    $scope.totalCalories = function(){
    };

    User.find().then(function(response){
      debugger;
      $scope.user = response.data.user;
    });

    $scope.config ={
      title: 'Calorie Intake',
      tooltips: false,
      labels: true,
      mouseover: function(){},
      mouseout: function(){},
      click: function(){},
      legend:{
        display: true,
        position: 'right'
      }
    };

    $scope.data ={
      series: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      data: [{
        x: 'Sunday',
        y: [100, 500, 0]
      },{
        x: 'Monday',
        y: [300, 100, 100]
      },{
        x: 'Tuesday',
        y: [351]
      },{
        x: 'Wednesday',
        y: [54, 0, 879]
      },{
        x: 'Thursday',
        y: [300, 100, 100]
      },{
        x: 'Friday',
        y: [351]
      },{
        x: 'Saturday',
        y: [54, 0, 879]
      },{
        x: 'Sunday',
        y: [54, 0, 879]
      }]
    };
  }]);
})();
