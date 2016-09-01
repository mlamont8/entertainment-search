'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the entsearchApp
 */
angular.module('entsearchApp')
  .controller('MainCtrl', ['$scope','$http',function($scope, $http){
  	$scope.date = new Date();
  	$scope.airToday = [];
  	$http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/tv/airing_today',
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee',
    			language: 'en'
    		}
    	}).then(function successCallback(data){
    		$scope.airToday = data;
    		console.log(data);
 //   	
    	}, function errorCallback(error){
    		console.error('error', error);
    	});



  }]);
