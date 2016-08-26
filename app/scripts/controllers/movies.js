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
  /*  $scope.search = function(){*/
    return $http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc',
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    			
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
    		console.log($scope.results);
    	}, function errorCallback(error){
    		console.error('error', error);
    	});
   // };

  }]);
