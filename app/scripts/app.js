'use strict';

/**
 * @ngdoc overview
 * @name jobApp
 * @description
 * # jobApp
 *
 * Main module of the application.
 */
angular
  .module('jobApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/reader', {
        templateUrl: 'views/reader.html',
        controller: 'ReaderCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
