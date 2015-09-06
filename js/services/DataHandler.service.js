/**
 * Created by stefabal on 06.09.15.
 */

angular.module('cfwp')
    .factory('DataHandler', function($window){

        var currentUser = {};

        var saveUser = function(user){
            currentUser = user;
            console.log('User Added to DataHandler: ');
            console.log(user);
        };

        var getUser = function(){
            return currentUser;
        };

        return {
            saveUser : saveUser,
            getUser: getUser
        }

});
