(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', 'dataService', searchController]);

    function searchController($scope, dataService) {
        var vm = this;
        vm.query = null;
        vm.cards = null;

        vm.doRequest = function doRequest(event) {
            dataService.queryPoints(null)
                .success(successC)
                .error(error);
        };

        function successC(data) {
            vm.cards = data;
        };
        function error(data, status, headers, config) {
            alert(data);
        };

    }
})();