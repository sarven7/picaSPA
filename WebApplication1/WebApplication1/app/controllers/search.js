(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope','$rootScope', 'dataService', searchController]);

    function searchController($scope, $rootScope, dataService) {
        var vm = this;
        vm.queryResults = null;
        var resultsIn = $rootScope.$on('newResults', function (event, eventArgs) { vm.queryResults = eventArgs });
        var onDestroy = $scope.$on('$destroy', function () { resultsIn();})
        

        vm.doRequest = function doRequest(queryString) {
            vm.queryResults = [];
            dataService.queryPoints(queryString);
        };
    }
})();