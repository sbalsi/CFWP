/**
 * Created by stefabal on 06.09.15.
 */
'use strict';

angular.module('welcome', ['ui.router'])

    .controller('WelcomeCtrl', function($scope, $http,_, $state, DataHandler) {

       $scope.user = DataHandler.getUser();




        $scope.functions = [];




        $scope.addFunction = function () {
            $scope.functions.push({functionInput:$scope.functionInput});
            $scope.functionInput = '';
        };



        $scope.print = function(){
            console.log('$scope.functions');
            console.log($scope.functions);
        }







    });