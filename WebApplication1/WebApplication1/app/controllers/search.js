(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$rootScope', searchController]);

    function searchController($scope, $rootScope) {
        $scope.title = 'Search';
        $scope.activate = activate;

        function activate() { }
    }
})();
