/**
 * Created by stefabal on 06.09.15.
 */
'use strict';

angular.module('login', ['ui.router'])


    .controller('LoginCtrl', function($scope, $http,_, DataHandler, $state) {


        var users = [
            {userName: 'Koebi',
            password: 'lagomio'},
            {userName:'Ste',
            password: 'speed'}
        ];

        console.log('Users: ');
        console.log(users);

        $scope.login = function(){

            _.forEach(users, function(user){
                if($scope.user.userName == user.userName && $scope.user.userName){
                    console.log('Success, welcome: ' + $scope.user.userName);
                    DataHandler.saveUser(user);
                    $state.go('welcome');

                }else{
                    console.log('Error, false loginData');
                }
            })


        }


    });