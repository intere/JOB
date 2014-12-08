'use strict';

describe('Directive: inBarCodeScanner', function () {

  // load the directive's module
  beforeEach(module('jobApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<in-bar-code-scanner></in-bar-code-scanner>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the inBarCodeScanner directive');
  }));
});
