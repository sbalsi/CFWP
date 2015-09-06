/**
 * Created by Stefan on 26.08.2015.
 */
'use strict';

// Declare app level module which depends on views, and components
angular.module('cfwp', [
	'ngRoute',
	'login'

]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/login'});
	}]);