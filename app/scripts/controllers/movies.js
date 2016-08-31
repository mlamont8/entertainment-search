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
  .controller('MoviesCtrl', ['$scope', '$http','idData',function ($scope, $http, idData) {
       // Function to send to movie id to moviedetail view when selection is clicked
    $scope.share = function(id){
        idData.set(id);
 }; 
    $scope.results = [];
  // Returns popular movies on page load
     $http({
    		method: 'GET',
    		url: 'http://api.themoviedb.org/3/movie/popular?sort_by=popularity.desc',
            cache: true,
    		params: {
    			api_key: '21b0daca9dad79653c91d176b7930bee'
    			
    		}
    	}).then(function successCallback(data){
    		$scope.results = data;
 //   	
    	}, function errorCallback(error){
    		console.error('error', error);
    	});

 $scope.search = function(){
  $http({
        method: 'GET',
        url: 'http://api.themoviedb.org/3/search/movie',
            cache: true,
        params: {
          api_key: '21b0daca9dad79653c91d176b7930bee',
          query: $scope.searchTerm
        }
      }).then(function successCallback(data){
        $scope.results = data;
    console.log(data);
      }, function errorCallback(error){
        console.error('error', error);
      });

};


 

  }]);
