'use strict';

describe('Controller: TdetailcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('entsearchApp'));

  var TdetailcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TdetailcontrollerCtrl = $controller('TdetailcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TdetailcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
