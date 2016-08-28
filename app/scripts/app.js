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
    'ui.router'
  ])
  .config(function($locationProvider,$stateProvider, $urlRouterProvider){
  	$locationProvider.html5Mode(true);
  	$urlRouterProvider.otherwise('/');
  	$stateProvider
  		.state('home', {
  			url: '/',
  			templateUrl: '/views/main.html'
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
  		 .state('about', {
  			url: '/about',
  			templateUrl: '/views/about.html'
  		})
  		 .state('contact', {
  			url: '/contact',
  			templateUrl: '/views/contact.html'
  		})
       .state('mdetail',{
        url: '/movies',
        template: '/views/mdetail.html',
        controller: 'mdetailcontroller as movieDetail'
       })
       .state('tdetail',{
        url: '/tvshowdetail',
        templateUrl: '/views/tdetail.html',
        controller: 'tdetailcontroller as tvDetail'
       });

  });
