(function () {
    'use strict';

    var controllerId = 'loginAndRedirect';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$window', loginAndRedirect]);

    function loginAndRedirect($scope, $window) {
        //$window.location.href = "http://localhost:60646/Login/Index";
        $window.location.href = "http://eng-dev03/Login/Index";
    }
})();
