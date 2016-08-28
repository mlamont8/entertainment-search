'use strict';

/**
 * @ngdoc function
 * @name entsearchApp.controller:MdetailcontrollerCtrl
 * @description
 * # MdetailcontrollerCtrl
 * Controller of the entsearchApp
 */
angular.module('entsearchApp')
  .controller('Mdetailcontroller', function (movieData) {
    var sharedData=movieData;
    console.log(sharedData);
  });
