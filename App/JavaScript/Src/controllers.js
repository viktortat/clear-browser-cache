(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', function () {
        var vm = this;

        vm.browser = bowser;
        vm.image = getImage();
        vm.video = getVideo();

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

            return 'Content/Images/' + browserImage;
        }

        function getVideo() {
            // http://onelittledesigner.com/rapidweaver/web-icons/free-flat-browser-icons/
            var browserVideo = '';

            switch (bowser.name) {
                case "Chrome":
                    browserVideo = 'Chrome-38.gif';
                    break;
                case "Internet Explorer":
                    browserVideo = 'InternetExplorer-11.gif';
                    break;
                case "Firefox":
                    browserVideo = 'Firefox-32.gif';
                    break;
                case "Opera":
                    browserVideo = 'Opera-12.gif';
                    break;
                case "Safari":
                    browserVideo = 'Safari-8.gif';
                    break;
                default:
                    browserVideo = '';
            }

            return 'Content/Images/Gifs/' + browserVideo;
        }
    });
})();
