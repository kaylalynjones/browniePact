(function(){
  'use strict';

  angular.module('browniePact', ['ngRoute', 'LocalForageModule', 'angularCharts'])
  .config(['$routeProvider', '$httpProvider', '$localForageProvider', function($routeProvider, $httpProvider, $localForageProvider){
    $routeProvider
    .when('/', {templateUrl:'/views/home/home.html', controller:'HomeCtrl'})
    .when('/register', {templateUrl:'/views/register/register.html', controller:'RegisterCtrl'})
    .when('/login', {templateUrl:'/views/login/login.html', controller:'LoginCtrl'})
    .when('/logout', {templateUrl:'/views/logout/logout.html', controller:'LogoutCtrl'})
    .when('/profile', {templateUrl:'/views/profile/profile.html', controller:'ProfileCtrl'})
    .when('/dailyinput', {templateUrl:'/views/dailyinputs/dailyinputs.html', controller:'DailyInputsCtrl'})
    .when('/dashboard', {templateUrl:'/views/dashboards/dashboards.html', controller:'DashboardsCtrl'})
    .otherwise({redirectTo:'/'});

    $httpProvider.interceptors.push('HttpInterceptor');
    $localForageProvider.config({name:'browniePact', storeName:'cache', version:1.0});
  }]);
})();

