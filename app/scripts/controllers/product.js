'use strict';

/**
 * @ngdoc function
 * @name loktraApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the loktraApp
 */
angular.module('loktraApp')
  .controller('ProductCtrl', function ($scope, cart, $location) {
  	var _s = $scope;
    _s.showError = false;
    _s.itemObject = cart.getCart();

    _s.goTODonationPage = function(){
    	$location.url("donation");
    };

    _s.addItem = function() {
    	_s.itemObject = JSON.parse(JSON.stringify(cart.addItem()));
    };

    _s.removeItem = function(id) {
        _s.itemObject = JSON.parse(JSON.stringify(cart.remove(id)));
    };

    _s.ClearCart = function(){
    	_s.itemObject = JSON.parse(JSON.stringify(cart.clear()));
    };

    _s.qtyChange = function(){
    	if(!cart.changeQuantity(_s.itemObject)){
            _s.showError = true;
        }
        else{
            _s.showError = false;
        }
    };
    _s.total = function() {
        var total = 0;
        if (_s.itemObject) {
        	angular.forEach(_s.itemObject.items, function(item) {
	            total += item.qty * item.cost;
	        });
        }
        return total;
    };
  });
