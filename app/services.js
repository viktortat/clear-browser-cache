(function () {
    'use strict';

    var appServices = angular.module('app.services', []).value('version', '1.5.4');

    appServices.factory('browserService', function () {
        var browserService = {};
        var imagePrefix = 'assets/images/';
        var videoPrefix = 'assets/images/gifs/';

        var android = {
            image: 'chrome.png',
            video: 'android-4.4-default.gif',
            name: 'Android',
            vendor: 'Chrome',
            url: 'chrome-android'
        };

        var chrome = {
            image: 'chrome.png',
            video: 'chrome-38.gif',
            name: 'Chrome',
            vendor: 'Chrome',
            url: 'chrome'
        };

        var ie8 = {
            image: 'internet-explorer.png',
            video: 'internet-explorer-8.gif',
            name: 'Internet Explorer',
            vendor: 'Internet Explorer',
            url: 'internet-explorer-8'
        };

        var ie = {
            image: 'internet-explorer.png',
            video: 'internet-explorer-11.gif',
            name: 'Internet Explorer',
            vendor: 'Internet Explorer',
            url: 'internet-explorer'
        };

        var edge = {
            image: 'edge.png',
            video: 'edge.gif',
            name: 'Microsoft Edge',
            vendor: 'Microsoft Edge',
            url: 'microsoft-edge'
        };

        var firefox = {
            image: 'firefox.png',
            video: 'firefox-32.gif',
            name: 'Firefox',
            vendor: 'Firefox',
            url: 'firefox'
        };

        var opera = {
            image: 'opera.png',
            video: 'opera-12.gif',
            name: 'Opera',
            vendor: 'Opera',
            url: 'opera'
        };

        var safari = {
            image: 'safari.png',
            video: 'safari-8.gif',
            name: 'Safari',
            vendor: 'Safari',
            url: 'safari'
        };

        var iPhone = {
            image: 'safari.png',
            video: 'safari-ios8-iphone.gif',
            name: 'Safari on iPhone',
            vendor: 'Safari',
            url: 'safari-iphone'
        };

        var iPad = {
            image: 'safari.png',
            video: 'safari-ios8.gif',
            name: 'Safari on iPad',
            vendor: 'Safari',
            url: 'safari-ipad'
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
            } else if (browserDetail.name === 'Microsoft Edge') {
                browser = edge;
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
                browser.url = '';
            }

            return {
                image: imagePrefix + browser.image,
                video: videoPrefix + browser.video,
                name: browser.name,
                vendor: browser.vendor,
                version: browserDetail.version,
                url: browser.url
            };
        };

        return browserService;
    });
}());