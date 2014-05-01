(function () {
    'use strict';

    var controllerId = 'loginAndRedirect';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', loginAndRedirect]);

    function loginAndRedirect($scope) {
        window.location.href = "http://localhost:60646/Login/Index";
    }
})();
