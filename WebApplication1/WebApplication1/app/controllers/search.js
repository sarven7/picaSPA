(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope','$rootScope','$location', 'dataService', searchController]);

    function searchController($scope, $rootScope, $location, dataService) {
        var vm = this;
        vm.queryResults = null;
        var resultsIn = $rootScope.$on('newResults', function (event, eventArgs) { vm.queryResults = eventArgs });
        var onDestroy = $scope.$on('$destroy', function () { resultsIn();})
        

        vm.doRequest = function doRequest(queryString) {
            vm.queryResults = [];
            dataService.queryPoints(queryString);
        };

        vm.tagSelected = function tagSelected(webId) {
            $location.path("/tagDetail/" + webId);
        }
    }
})();