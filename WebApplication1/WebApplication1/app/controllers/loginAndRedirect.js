(function () {
    'use strict';

    var controllerId = 'loginAndRedirect';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', loginAndRedirect]);

    function loginAndRedirect($scope) {
        var vm = this;

        vm.activate = activate;
        vm.title = 'loginAndRedirect';

        function activate() { }
    }
})();
