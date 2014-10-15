(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', function () {
        var vm = this;

        vm.browser = bowser;
        vm.image = 'Content/Images/' + getImage();

        function getImage() {
            // http://onelittledesigner.com/rapidweaver/web-icons/free-flat-browser-icons/
            var browserImage = '';

            switch (bowser.name) {
                case "Chrome":
                    browserImage = 'Chrome.png';
                    break;
                case "Internet Explorer":
                    browserImage = 'InternetExplorer.png';
                    break;
                case "Firefox":
                    browserImage = 'Firefox.png';
                    break;
                case "Opera":
                    browserImage = 'Opera.png';
                    break;
                case "Safari":
                    browserImage = 'Safari.png';
                    break;
                default:
                    browserImage = '';
            }

            return browserImage;
        }
    });
})();
