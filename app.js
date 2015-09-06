/**
 * Created by Stefan on 26.08.2015.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('cfwp', [
	'login',
	'welcome',
	'ui.router'


]).


	config(function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/login');

		$stateProvider
			.state('login', {
				url: "/login",
				templateUrl: "views/login.html",
				controller: "LoginCtrl"
			})
			.state('welcome', {
				url: "/welcome",
				templateUrl: "views/welcome.html",
				controller: "WelcomeCtrl"
			})



});