(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$rootScope', '$http', 'dataService', searchController]);

    function searchController($scope, $rootScope, $http, dataService) {
        var vm = this;
        $scope.title = 'Search';
        $scope.activate = activate;
        vm.doRequest = doRequest;
        
        function activate() { }

        function doRequest() {
            var cookies = document.cookie;
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