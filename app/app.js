(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',
        'app.filters',
        'app.services',
        'app.directives',
        'app.controllers'
    ]);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
        .when('/', {
            title: 'Clear Browser Cookies, Browser History and Browser Cache',
            templateUrl: 'app/views/home.html'
        })
        .when('/unknown-browser', {
            title: 'Clear Browser Cookies, Browser History and Browser Cache',
            templateUrl: 'app/views/unknown-browser.html'
        })
        .when('/chrome', {
            title: 'Clear Browser History in Chrome',
            templateUrl: 'app/views/chrome/chrome.html'
        })
        .when('/chrome-android', {
            title: 'Clear Browser History in Chrome for Android',
            templateUrl: 'app/views/chrome/chrome-android.html'
        })
        .when('/firefox', {
            title: 'Clear Browser History in Firefox',
            templateUrl: 'app/views/firefox/firefox.html'
        })
        .when('/safari-mac', {
            title: 'Clear Browser History in Safari for Mac',
            templateUrl: 'app/views/safari/safari.html'
        })
        .when('/safari-ipad', {
            title: 'Clear Browser History in Safari for iPad',
            templateUrl: 'app/views/safari/safari-ipad.html'
        })
        .when('/safari-iphone', {
            title: 'Clear Browser History in Safari for iPhone',
            templateUrl: 'app/views/safari/safari-iphone.html'
        })
        .when('/microsoft-edge', {
            title: 'Clear Browser History in Microsoft Edge for Windows',
            templateUrl: 'app/views/edge/edge.html'
        })
        .when('/internet-explorer', {
            title: 'Clear Browser History in Internet Explorer versions 9, 10 and 11 for Windows',
            templateUrl: 'app/views/internet-explorer/internet-explorer.html'
        })
        .when('/internet-explorer-8', {
            title: 'Clear Browser History in Internet Explorer version 8 for Windows XP',
            templateUrl: 'app/views/internet-explorer/internet-explorer-8.html'
        })
        .when('/opera', {
            title: 'Clear Browser History in Opera',
            templateUrl: 'app/views/opera/opera.html'
        })
        .otherwise({
            redirectTo: '/'
        });

        //$locationProvider.html5Mode(true);
    }]);

    app.run(['$rootScope', '$route', function ($rootScope, $route) {
        $rootScope.$on('$routeChangeSuccess', function () {
            document.title = $route.current.title;
        });
    }]);
}());