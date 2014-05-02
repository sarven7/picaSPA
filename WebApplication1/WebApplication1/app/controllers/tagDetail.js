(function () {
    'use strict';

    var controllerId = 'tagDetail';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$rootScope', '$location' ,'$routeParams', 'dataService', tagDetail]);

    function tagDetail($scope, $rootScope, $location, $routeParams, dataService) {
        var vm = this;
        vm.webId = $routeParams.tagId;
        vm.tagDetails = null;
        vm.recordedValues = null;

        var tagDetailListener = $rootScope.$on('tagDetailReady', function (event, eventArgs) { vm.tagDetails = eventArgs });
        var recordedValueListener = $rootScope.$on('recordedValuesReady', function (event, eventArgs) { vm.recordedValues = eventArgs});
        var onDestroy = $scope.$on('$destroy', function () { tagDetailListener(); recordedValueListener() })


        function activate() {
            if (vm.webId === undefined || vm.webId == null || vm.webId == "") {
                $location.path("/search");
            }
            else {
                dataService.getTagDetails(vm.webId);
                dataService.getRecordedValues(vm.webId, "-1d", "*");
            }
        }

        activate();
    }
})();
