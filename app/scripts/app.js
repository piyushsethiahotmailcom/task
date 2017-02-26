'use strict';

/**
 * @ngdoc overview
 * @name loktraApp
 * @description
 * # loktraApp
 *
 * Main module of the application.
 */
angular
  .module('loktraApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false).hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/donation', {
        templateUrl: 'views/donation.html',
        controller: 'DonationCtrl',
        controllerAs: 'donation'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
