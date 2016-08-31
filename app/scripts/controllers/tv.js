'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:TvCtrl
 * @description
 * # TvCtrl
 * Controller of the entsearchApp
 */
angular.module('entsearchApp')
  .controller('TvCtrl', ['$scope','$http','idData',function ($scope, $http, idData) {
   // function to send id to tv detail controller
   $scope.share = function(id){
    idData.set(id);
   };
    $scope.results = [];
    // Returns popular tv shows on page load
    $http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/tv/popular',
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
    		console.log($scope.results);
    	}, function errorCallback(error){
    		console.error('error', error);
    	});
  /*  };*/

  }]);
