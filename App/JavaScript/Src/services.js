(function () {
    'use strict';

    var appServices = angular.module('app.services', []).value('version', '1.5.4');

    appServices.factory('browserService', function () {
        var browserService = {};
        var imagePrefix = 'App/Content/Images/';
        var videoPrefix = 'App/Content/Images/Gifs/';

        var android = {
            image: 'Chrome.png',
            video: 'Android-4.4-default.gif',
            name: 'Android',
            vendor: 'Chrome'
        };

        var chrome = {
            image: 'Chrome.png',
            video: 'Chrome-38.gif',
            name: 'Chrome',
            vendor: 'Chrome'
        };

        var ie8 = {
            image: 'Internet-Explorer.png',
            video: 'InternetExplorer-8.gif',
            name: 'Internet Explorer',
            vendor: 'Internet Explorer'
        };

        var ie = {
            image: 'Internet-Explorer.png',
            video: 'InternetExplorer-11.gif',
            name: 'Internet Explorer',
            vendor: 'Internet Explorer'
        };

        var firefox = {
            image: 'Firefox.png',
            video: 'Firefox-32.gif',
            name: 'Firefox',
            vendor: 'Firefox'
        };

        var opera = {
            image: 'Opera.png',
            video: 'Opera-12.gif',
            name: 'Opera',
            vendor: 'Opera'
        };

        var safari = {
            image: 'Safari.png',
            video: 'Safari-8.gif',
            name: 'Safari',
            vendor: 'Safari'
        };

        var iPhone = {
            image: 'Safari.png',
            video: 'Safari-ios8-iphone.gif',
            name: 'Safari on iPhone',
            vendor: 'Safari',
        };

        var iPad = {
            image: 'Safari.png',
            video: 'Safari-ios8.gif',
            name: 'Safari on iPad',
            vendor: 'Safari',
        };

        browserService.getBrowser = function (browserDetail) {
            var browser = {};

            if (browserDetail.name === 'Android' || (browserDetail.name === 'Chrome' && browserDetail.android === true)) {
                browser = android;
            } else if (browserDetail.name === 'Chrome') {
                browser = chrome;
            } else if (browserDetail.name === 'Internet Explorer 8' || (browserDetail.name === 'Internet Explorer' && browser.version === 8)) {
                browser = ie8;
            } else if (browserDetail.name === 'Internet Explorer') {
                browser = ie;
            } else if (browserDetail.name === 'Firefox') {
                browser = firefox;
            } else if (browserDetail.name === 'Opera') {
                browser = opera;
            } else if (browserDetail.name === 'Safari') {
                browser = safari;
            } else if (browserDetail.name === 'iPhone') {
                browser = iPhone;
            } else if (browserDetail.name === 'iPad') {
                browser = iPad;
            } else {
                browser.image = '';
                browser.video = '';
                browser.name = '';
            }

            return {
                image: imagePrefix + browser.image,
                video: videoPrefix + browser.video,
                name: browser.name,
                vendor: browser.vendor,
                version: browserDetail.version
            };
        };

        return browserService;
    });
})();