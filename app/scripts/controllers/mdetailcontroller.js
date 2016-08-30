'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:MdetailcontrollerCtrl
 * @description
 * # MdetailcontrollerCtrl
 * Controller of the entsearchApp
 */
angular.module('entsearchApp')
  .controller('mdetailcontroller', ['$scope', '$http', 'movieData',function ($scope, $http, movieData) {
    var sharedData=movieData.get();

     $scope.results = [];
  // Returns movie data based on movie id
    return $http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/movie/'+ sharedData,
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    			
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
        
    	}, function errorCallback(error){
    		console.error('error', error);
    	});

   }]);
