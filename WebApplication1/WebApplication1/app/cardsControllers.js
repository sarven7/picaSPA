var cardsControllers = angular.module('cardsControllers', []);

cardsControllers.controller('cardsListController', ['$scope', '$http', function ($scope, $http) {
    $scope.cardsCount = 10;
    var urlBase = "http://public-api.wordpress.com/rest/v1/sites/wtmpeachtest.wordpress.com/posts?callback=JSON_CALLBACK";
    var urlBase2 = "https://dstcontrols.pica.pipreview.com/piwebapi?callback=JSON_CALLBACK";

    //$http({ method: 'GET', url: '/entity/' + id + '?access_token=' + token, headers: { 'Authorization': 'Bearer ' + token } }).then(function (response) {
    //    // do stuff
    //});

    //$http({
    //    url: '/token',
    //    method: 'POST',
    //    data: "userName=" + $scope.username + "&password=" + $scope.password +
    //          "&grant_type=password"
    //})
    //headers: {'Authorization': 'JWT token="'+token+'"'}}

    var tokenn = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlNnakxLVkNuRXVMRnd4VTluVDNoeVdtT2NjNCJ9.eyJhdWQiOiJ1cmk6ZHN0Y29udHJvbHMuUElDQSIsImlzcyI6Imh0dHBzOi8vb3Npc29mdGRlbW9pZGVudGl0eXNlcnZpY2UuYWNjZXNzY29udHJvbC53aW5kb3dzLm5ldC8iLCJuYmYiOjEzOTg0NDM4MzQsImV4cCI6MTM5ODQ0NzQzNCwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbmluc3RhbnQiOiIyMDE0LTA0LTI1VDE2OjM3OjExLjE2NVoiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2F1dGhlbnRpY2F0aW9ubWV0aG9kIjoidXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmFjOmNsYXNzZXM6UGFzc3dvcmRQcm90ZWN0ZWRUcmFuc3BvcnQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJTLTEtNS0yMS0zMjkwNjgxNTItMTA4NTAzMTIxNC04Mzk1MjIxMTUtNzc1NCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3VwbiI6ImV4dC1vc2lzb2Z0QGRzdGNvbnRyb2xzLmxvY2FsIiwiaHR0cDovL3NjaGVtYXMub3Npc29mdC5jb20vY2xhaW1zL3JlbHlpbmdwYXJ0eXRlbmFudGlkZW50aWZpZXIiOiJkc3Rjb250cm9scyIsImlkZW50aXR5cHJvdmlkZXIiOiJodHRwOi8vYWRmcy5kc3Rjb250cm9scy5jb20vYWRmcy9zZXJ2aWNlcy90cnVzdCJ9.6du96o8fY9m54BDoEZAKfnH-cxXd_f9Ta0hTbevJc6iygSYveetV6Rkm2U2L0aGeP4baTmQBOYtfzOsHmP6kPI9_a9xAbp_qQ-TVqX7gi-YjkmxgGV-7al8bHIV1iq_DZAQG_O4Gi9Yan8zHHZO-1GS89vXvTn3yqAQrlOGDkY05SQTG_dELPboyi4iAnjoU5mHqdATbxejLmEtY8_e0vXvTKIkCtC3hC7IwAK4GzUxn1y6nEQgyihnKDXmWo2bs_otXZquvd47MCMlQN7qUikV2iPW_pfCxuIMDNN_ZlPPOHiV-cjLeR7I0s0u2piACvMZGRyBDpYUPTbLM6RdhUQ";
    var authInfo = "ext-osisoft@dstcontrols.local" + ":" + "DST1controls";
    authInfo = window.btoa(authInfo);

    $scope.doRequest = function () {

        $http({ method: 'jsonp', url: urlBase2, "headers": { 'Authorization': "Bearer " + tokenn } }).success(function (data) {
            $scope.cards = data;
        })
        .error(function (data, status, headers, config) {
            $scope.cards = data;
        });
        jsonp: 'jsonp'
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