(function () {
    'use strict';

    var controllerId = 'saveToken';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId, ['$scope', '$window', '$location', 'dataService', saveToken]);

    function saveToken($scope, $window, $location, dataService) {
        dataService.setToken($window.location.href.split("access_token=")[1]);
        $location.path("/search");
    }
})();
