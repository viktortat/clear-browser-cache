(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers'
    ]);

    app.config(['$routeProvider', function ($routeProvider) {
        //$routeProvider.when('/', {
        //    templateUrl: 'Partials/timer.html'
        //});
        $routeProvider.otherwise({ redirectTo: '/' });
    }]);
})();