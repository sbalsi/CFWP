/**
 * Created by stefabal on 06.09.15.
 */
'use strict';

angular.module('welcome', ['ui.router'])

    .controller('WelcomeCtrl', function($scope, $http,_, $state, DataHandler) {

        $scope.user = DataHandler.getUser();







    });