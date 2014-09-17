(function(){
  'use strict';

  angular.module('browniePact')
  .controller('DashboardsCtrl', ['$scope', function($scope){

    $scope.config ={
      debugger;
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
