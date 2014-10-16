(function () {
    'use strict';

    var appControllers = angular.module('app.controllers', []);

    appControllers.controller('BaseCtrl', function () {
        var vm = this;
        vm.showOptions = false;
        vm.browser = getBrowser(bowser);
        vm.selectedBrowser = {
            name: 'Chrome',
            video: 'App/Content/Images/Gifs/Chrome-38.gif'
        }

        vm.getSelectedBrowser = function (browserName) {
            vm.selectedBrowser.name = browserName;
            vm.selectedBrowser = getBrowser(vm.selectedBrowser);
        }

        function getBrowser(browserDetail) {
            // http://onelittledesigner.com/rapidweaver/web-icons/free-flat-browser-icons/
            var imagePrefix = 'App/Content/Images/';
            var videoPrefix = 'App/Content/Images/Gifs/';
            var browser = {};

            if (browserDetail.name === 'Android' && browserDetail.android === true) {
                browser.image = 'Chrome.png';
                browser.video = 'Android-4.2-default.gif';
                browser.name = 'Android';
            } else if (browserDetail.name === 'Chrome' && browserDetail.android === true) {
                browser.image = 'Chrome.png';
                browser.video = 'Android-4.2-default.gif';
                browser.name = 'Chrome on Android';
            } else if (browserDetail.name === 'Chrome') {
                browser.image = 'Chrome.png';
                browser.video = 'Chrome-38.gif';
                browser.name = 'Chrome';
            } else if (browserDetail.name === 'Internet Explorer') {
                browser.image = 'InternetExplorer.png';
                browser.video = 'InternetExplorer-11.gif';
                browser.name = 'Internet Explorer';
            } else if (browserDetail.name === 'Firefox') {
                browser.image = 'Firefox.png';
                browser.video = 'Firefox-32.gif';
                browser.name = 'Firefox';

            } else if (browserDetail.name === 'Opera') {
                browser.image = 'Opera.png';
                browser.video = 'Opera-12.gif';
                browser.name = 'Opera';
            }
            else if (browserDetail.name === 'Safari') {
                browser.image = 'Safari.png';
                browser.video = 'Safari-8.gif';
                browser.name = 'Safari';
            }
            else if (browserDetail.name === 'iPhone') {
                browser.image = 'Safari.png';
                browser.video = 'Safari-ios8-iphone.gif';
                browser.name = 'Safari on iPhone';
            }
            else if (browserDetail.name === 'iPad') {
                browser.image = 'Safari.png';
                browser.video = 'Safari-ios8.gif';
                browser.name = 'Safari on iPad';
            } else {
                browser.image = '';
                browser.video = '';
                browser.name = '';
            }

            browser.image = imagePrefix + browser.image;
            browser.video = videoPrefix + browser.video;
            browser.version = browserDetail.version;

            return browser;
        }
    });
})();
