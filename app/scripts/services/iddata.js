'use strict';

/**
 * @ngdoc service
 * @name entsearchApp.idData
 * @description
 * # idData
 * Service in the entsearchApp.
 */

 // Service to share id between controllers
angular.module('entsearchApp')
  .service('idData', function () {
 
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
