'use strict';

/**
 * @ngdoc overview
 * @name entsearchApp
 * @description
 * # entsearchApp
 *
 * Main module of the application.
 */
angular
  .module('entsearchApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'angular-loading-bar'
  ])
  .config(function($locationProvider,$stateProvider, $urlRouterProvider){
  	$locationProvider.html5Mode(true);
  	$urlRouterProvider.otherwise('/');
  	$stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: '/views/main.html',
        controller: 'MainCtrl as mainPage'
  		})
      .state('search', {
        url: '/search',
        templateUrl: '/views/search.html',
        controller: 'SearchCtrl as searchList'
      })
  		.state('movies', {
  			url: '/movies',
  			templateUrl: '/views/movies.html',
  			controller: 'MoviesCtrl as movieList'
  		})
  		 .state('tv', {
  			url: '/tv',
  			templateUrl: '/views/tv.html',
        controller: 'TvCtrl as tvList'
  		})
  		  .state('mdetail',{
        url: '/moviedetail',
        templateUrl: '/views/mdetail.html',
        controller: 'mdetailcontroller as movieDetail'
       })
       .state('tdetail',{
        url: '/tvshowdetail/',
        templateUrl: '/views/tdetail.html',
        controller: 'tdetailcontroller as tvDetail'
       });

  });
