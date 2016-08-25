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
  			templateUrl: '/views/tv.html'
  		})
  		 .state('about', {
  			url: '/about',
  			templateUrl: '/views/about.html'
  		})
  		 .state('contact', {
  			url: '/contact',
  			templateUrl: '/views/contact.html'
  		});

  });
