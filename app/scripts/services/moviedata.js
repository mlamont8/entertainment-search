'use strict';

/**
 * @ngdoc service
 * @name entsearchApp.movieData
 * @description
 * # movieData
 * Service in the entsearchApp.
 */
angular.module('entsearchApp')
  .service('movieData', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var savedData = {};
    function set(data){
    	savedData = data;
    }
    function get(){
    	return savedData;
    }

    return{
    	set: set,
    	get: get
    };
  });
