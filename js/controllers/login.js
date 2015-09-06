/**
 * Created by stefabal on 06.09.15.
 */
'use strict';

angular.module('login', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        });
    }])

    .controller('LoginCtrl', ['$scope', '$http', function($scope, $http) {

        console.log("Hello World from LoginCtrl");


    }]);