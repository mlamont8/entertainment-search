'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the entsearchApp
 */
angular.module('entsearchApp')
  .controller('SearchCtrl', ['$http','$scope',function($http, $scope) {
 $scope.Searching=false;
 $scope.results= [];
 $scope.search = function(){
 	$scope.Searching= true;
 	$http({
 		method: 'GET',
 		url: 'http://api.themoviedb.org/3/search/multi',
 		params: {
 			api_key: '21b0daca9dad79653c91d176b7930bee',
 			query: $scope.searchTerm

 		}

 	}).then(function successCallback(data){
 		$scope.results= data;
 		$scope.Searching= false;
 		console.log($scope.results);

 	},function errorCallback(){
 		console.error('error');
 		$scope.Searching = false;
 	}
 	);
 };

  }]);
