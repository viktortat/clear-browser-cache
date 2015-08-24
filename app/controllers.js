// http://onelittledesigner.com/rapidweaver/web-icons/free-flat-browser-icons/
(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['$location', 'browserService', function ($location, browserService) {
        var vm = this;

        vm.browser = browserService.getBrowser(bowser);
        vm.selectedBrowser = browserService.getBrowser(bowser);

        vm.getSelectedBrowser = function (browserName) {
            vm.selectedBrowser = browserService.getBrowser(browserName);
        };
    }]);

    appControllers.controller('HomeCtrl', ['$location', 'browserService', function ($location, browserService) {
        if (browserService.getBrowser(bowser).url) {
            $location.path(browserService.getBrowser(bowser).url);
        } else {
            $location.path('unknown-browser');
        }
    }]);
}());
