// http://onelittledesigner.com/rapidweaver/web-icons/free-flat-browser-icons/
(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', ['browserService', function (browserService) {
        var vm = this;

        vm.showOptions = false;
        vm.browser = browserService.getBrowser(bowser);
        vm.selectedBrowser = {
            name: 'Chrome',
            vendor: 'Chrome',
            video: 'App/Content/Images/Gifs/Chrome-38.gif',
        };

        vm.getSelectedBrowser = function (browserName) {
            vm.selectedBrowser.name = browserName;
            vm.selectedBrowser = browserService.getBrowser(vm.selectedBrowser);
        };
    }]);
})();
