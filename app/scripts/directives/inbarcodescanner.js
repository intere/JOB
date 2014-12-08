'use strict';

/**
 * @ngdoc directive
 * @name jobApp.directive:inBarCodeScanner
 * @description
 * # inBarCodeScanner
 */
angular.module('jobApp')
  .directive('inBarCodeScanner', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the inBarCodeScanner directive');
      }
    };
  });
