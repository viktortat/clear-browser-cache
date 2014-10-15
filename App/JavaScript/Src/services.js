(function () {
    'use strict';

    var appServices = angular.module('app.services', []).value('version', '1.5.4');

    appServices.factory('settingsService', function () {
        var _userSettings = { };
        return _userSettings;
    });
})();