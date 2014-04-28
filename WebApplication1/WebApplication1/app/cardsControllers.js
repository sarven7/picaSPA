var cardsControllers = angular.module('cardsControllers', []);

cardsControllers.controller('cardsListController', ['$scope', '$http', function ($scope, $http) {
    $scope.cardsCount = 10;
    var urlBase = 'http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK';

    var urlBase2 = 'https://dstcontrols.pica.pipreview.com/piwebapi?callback=JSON_CALLBACK';
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNnakxLVkNuRXVMRnd4VTluVDNoeVdtT2NjNCJ9.eyJhdWQiOiJ1cmk6ZHN0Y29udHJvbHMuUElDQSIsImlzcyI6Imh0dHBzOi8vb3Npc29mdGRlbW9pZGVudGl0eXNlcnZpY2UuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldC8iLCJuYmYiOjEzOTg3MDMxODYsImV4cCI6MTM5ODcwNjc4NiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDE0LTA0LTI4VDE2OjM5OjQ1LjkwMFoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItMTA4NTAzMTIxNC04Mzk1MjIxMTUtNzc1NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VwbiI6ImV4dC1vc2lzb2Z0QGRzdGNvbnRyb2xzLmxvY2FsIiwiaHR0cDovL3NjaGVtYXMub3Npc29mdC5jb20vY2xhaW1zL3JlbHlpbmdwYXJ0eXRlbmFudGlkZW50aWZpZXIiOiJkc3Rjb250cm9scyIsImlkZW50aXR5cHJvdmlkZXIiOiJodHRwOi8vYWRmcy5kc3Rjb250cm9scy5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCJ9.OdNwdluA3tqJG_5txZWF8WM5-IcLqVl6uE17ngVgE9GDM_XRJPh-t16iqo-A_pHvoitkF2GMAe75TjUhDzLH-OG1HfvxU_eI4WwIY-JkQBpJMWa-hpYUC-GhAvotAVI61d9iTUrkChxntK8B1zp3ZenFoJhIXKymQczvZnR3E3-faaPovHDYXlB-5BYhgRz5iB57bTjJGqr6ZHN4vU3CaJZ5dvlgpk3luPrQZsDqXXGATw0caBTUNXsQurgnZzcV8lKLoLMG6mdR6l7aOEKr_3wNt_ON_irKw4Te7CwCTNC6YeMwRQEkKOT1lDTC0aZivlzXSZCvr6l-a_1jNZqFDA';

    $scope.doRequest = function () {

        $http.defaults.headers.common.Authorization = 'Bearer ' + token;

        $http({ method: 'jsonp', responseType: 'json', url: urlBase2})
            .success(successC)
            .error(error);
    };

    function successC(data) {
        $scope.cards = data;
    };
    function error(data, status, headers, config) {
        alert(data);
    };



}]);



//$scope.user = { username: 'ext-osisoft@dstcontrols.local', password: 'DST1controls' };


//cardsControllers.controller('cardDetailController', function ($scope, $routeParams) {
//    var cards = $scope.$parent.cards;
//    for (var index = 0; index < cards.length; index++) {
//        if (cards[index].id == $routeParams.cardId) {
//            $scope.card = cards[index];
//            break;
//        }
//    }

//    $scope.update = function () {
//        if (!localStorage) {
//            return;
//        }

//        localStorage.setItem($scope.card.id, $scope.card.textEn);
//    };
//});