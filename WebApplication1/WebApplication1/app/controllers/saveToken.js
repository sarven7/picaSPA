(function () {
    'use strict';

    var controllerId = 'saveToken';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope','dataService', saveToken]);

    function saveToken($scope, dataService) {
        dataService.setToken(window.location.href.split("access_token=")[1]);
        window.location.href = "http://localhost:60646/#/search";
    }
})();
