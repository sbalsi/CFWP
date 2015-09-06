/**
 * Created by stefabal on 06.09.15.
 */
/*global angular */


angular.module('cfwp')

    .factory('api', function ($http) {
        'use strict';

        var store = {
            todos: [],


            get: function () {
                return $http.get('/api/todos')
                    .then(function (resp) {
                        angular.copy(resp.data, store.todos);
                        return store.todos;
                    });
            },

            insert: function (todo) {
                var originalTodos = store.todos.slice(0);

                return $http.post('/api/todos', todo)
                    .then(function success(resp) {
                        todo.id = resp.data.id;
                        store.todos.push(todo);
                        return store.todos;
                    }, function error() {
                        angular.copy(originalTodos, store.todos);
                        return store.todos;
                    });
            },

            put: function (todo) {
                var originalTodos = store.todos.slice(0);

                return $http.put('/api/todos/' + todo.id, todo)
                    .then(function success() {
                        return store.todos;
                    }, function error() {
                        angular.copy(originalTodos, store.todos);
                        return originalTodos;
                    });
            }
        };

        return store;
    });

