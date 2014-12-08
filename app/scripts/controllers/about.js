'use strict';

/**
 * @ngdoc function
 * @name jobApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the jobApp
 */
angular.module('jobApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
