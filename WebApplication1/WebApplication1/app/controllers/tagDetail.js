(function () {
    'use strict';

    var controllerId = 'tagDetail';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', tagDetail]);

    function tagDetail($scope) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'tagDetail';

        function activate() { }
    }
})();
