var myServices = angular.module('myServices', ['ngResource'])

myServices.factory('Task', function($resource) {
    return $resource('api/tasks/:id', { id: "@_id" });
})
