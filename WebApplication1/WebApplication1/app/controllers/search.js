(function () {
    'use strict';

    var controllerId = 'search';

    // TODO: replace app with your module name
    angular.module('mainApp').controller(controllerId,
        ['$scope', '$rootScope', '$http', searchController]);

    function searchController($scope, $rootScope, $http) {
        var vm = this;
        $scope.title = 'Search';
        $scope.activate = activate;
        vm.doRequest = doRequest;

        var urlBase = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK';
        var urlBase2 = 'https://dstcontrols.pica.pipreview.com/piwebapi';
        var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNnakxLVkNuRXVMRnd4VTluVDNoeVdtT2NjNCJ9.eyJhdWQiOiJ1cmk6ZHN0Y29udHJvbHMuUElDQSIsImlzcyI6Imh0dHBzOi8vb3Npc29mdGRlbW9pZGVudGl0eXNlcnZpY2UuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldC8iLCJuYmYiOjEzOTg4MTI2MDUsImV4cCI6MTM5ODgxNjIwNSwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDE0LTA0LTI5VDIzOjAzOjI0LjMxM1oiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItMTA4NTAzMTIxNC04Mzk1MjIxMTUtNzc1NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VwbiI6ImV4dC1vc2lzb2Z0QGRzdGNvbnRyb2xzLmxvY2FsIiwiaHR0cDovL3NjaGVtYXMub3Npc29mdC5jb20vY2xhaW1zL3JlbHlpbmdwYXJ0eXRlbmFudGlkZW50aWZpZXIiOiJkc3Rjb250cm9scyIsImlkZW50aXR5cHJvdmlkZXIiOiJodHRwOi8vYWRmcy5kc3Rjb250cm9scy5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCJ9.kV1jPrZwNFDSEkSMLbRwabL0vxg53L_dmv9Bqg84EmlGfPiEQ1B9o35NnrmgSzHXvG6LjfBF1Fi4emp4ypqOZpPu7vVGbxjFrPEB9e2T039NBbGFf2FmJm5bU0HeRaD5En2dJPVTsar2Tn5wqR6FTAYIkUh2n52Y21POU4srlH6R9f4Id6dF8Uyotz5kPaQkuQKmNGtx_27qBpOB5qSLegzVG4d_5B2etXtFVjjHxc6-Mumw4J9ZlqpJ_SncMCgaW_0rgZKzbwfxzpLMP4X7aFV-O1-nt3X_Yhf93AOB2F8nuOCCKc5KZwk_fas1cPEGV1pMJsEPxwNDHa98-BkgVQ';


        function activate() { }

        function doRequest() {

            $http.defaults.headers.common.Authorization = 'Bearer ' + token;

            $http({ method: 'get', responseType: 'json', url: urlBase2, widthCredentials: true })
            $http.get(urlBase2)
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








//var cardsControllers = angular.module('cardsControllers', ['ngResource']);

//cardsControllers.controller('cardsListController', ['$scope', '$http', '$window', function ($scope, $http, $window) {
//    $scope.cardsCount = 10;
//    var urlBase = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK';

//    var urlBase2 = 'https://dstcontrols.pica.pipreview.com/piwebapi';
//    //var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNnakxLVkNuRXVMRnd4VTluVDNoeVdtT2NjNCJ9.eyJhdWQiOiJ1cmk6ZHN0Y29udHJvbHMuUElDQSIsImlzcyI6Imh0dHBzOi8vb3Npc29mdGRlbW9pZGVudGl0eXNlcnZpY2UuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldC8iLCJuYmYiOjEzOTg3OTgxNjQsImV4cCI6MTM5ODgwMTc2NCwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDE0LTA0LTI5VDE2OjQ2OjI2LjI0MVoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItMTA4NTAzMTIxNC04Mzk1MjIxMTUtNzc1NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VwbiI6ImV4dC1vc2lzb2Z0QGRzdGNvbnRyb2xzLmxvY2FsIiwiaHR0cDovL3NjaGVtYXMub3Npc29mdC5jb20vY2xhaW1zL3JlbHlpbmdwYXJ0eXRlbmFudGlkZW50aWZpZXIiOiJkc3Rjb250cm9scyIsImlkZW50aXR5cHJvdmlkZXIiOiJodHRwOi8vYWRmcy5kc3Rjb250cm9scy5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCJ9.lclhITYJ2djWLkjXV3GJsrLNimzUeLhj0sLIDo4mzVz6yLURDYmpEzHn1Cm_5ASg5LgT3zr6eRb4ztxolz1sW3Z1OUcwObiWfr3P5SFa7URTCimwt09641RrmIYjnKXO2Ne4T9jOa-cce9FTp-2qXZ9txLv6-9kdTgH5VRTpB-iYcjWctFKAqZi55W7dqCC4WrLg50q_5z3JnViihlnpBYVz_eIuJgNsV3wSxXOWLAKf01RYvwM2N2XihAIBOugaBzSz-Keh8Krbp9n3x_97m3mVygvjKPJSWnQeAV-tNXZO3fTkZvDjb8KZzKjgf59mb-d_8KwfHq71S0w8IvrFyQ';

//    $scope.doRequest = function () {

//        //$http.defaults.headers.common.Authorization = 'Bearer ' + token;

//        $http({ method: 'get', responseType: 'json', url: urlBase2, widthCredentials: true })
//        $http.get(urlBase2)
//            .success(successC)
//            .error(error);
//    };

//    function successC(data) {
//        $scope.cards = data;
//    };
//    function error(data, status, headers, config) {
//        alert(data);
//    };



//    $scope.redirectToLogin = function () {

//        var redirectUrl = "http://localhost:60646/Login";
//        $window.location(redirectUrl);
//        $scope.$apply();
//    }




//}]);
