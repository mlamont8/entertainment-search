'use strict';

/**
 * @ngdoc service
 * @name entsearchApp.movieData
 * @description
 * # movieData
 * Service in the entsearchApp.
 */

 // Service to share movie id between mdetailcontroller and moviecontroller
angular.module('entsearchApp')
  .service('movieData', function () {
 
    var savedData = {};
    savedData.data = false;

    //sets data
    savedData.set = function (data){
        this.data = data;
        };

    //retrieves data
    savedData.get = function(){
    	return this.data;
    };
    return savedData;

   });
