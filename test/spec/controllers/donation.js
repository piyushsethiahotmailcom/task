'use strict';

describe('Controller: DonationCtrl', function () {

  // load the controller's module
  beforeEach(module('loktraApp'));

  var DonationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DonationCtrl = $controller('DonationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DonationCtrl.awesomeThings.length).toBe(3);
  });
});
