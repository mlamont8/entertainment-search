'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:MoviesCtrl
 * @description
 * # MoviesCtrl
 * Controller of the entsearchApp
 */
 // http://api.themoviedb.org/3/movie/popular?api_key=21b0daca9dad79653c91d176b7930bee&text=emerald
angular.module('entsearchApp')
  .controller('MoviesCtrl', ['$scope', '$http',function ($scope, $http) {
    $scope.results = [];
    $scope.search = function(){
    	$http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/movie/popular',
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee',
    			text: $scope.searchTerm
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
    		console.log($scope.results);
    	}, function errorCallback(error){
    		console.error('error', error);
    	});
    };

  }]);
