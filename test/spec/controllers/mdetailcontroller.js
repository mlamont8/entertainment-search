'use strict';

describe('Controller: MdetailcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('entsearchApp'));

  var MdetailcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MdetailcontrollerCtrl = $controller('MdetailcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MdetailcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
