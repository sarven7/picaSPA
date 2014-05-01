(function () {
    'use strict';
    var serviceId = 'dataService';
    angular.module('mainApp').factory(serviceId, ['$http', dataService]);

    function dataService($http) {
        var token = "";
        var urlBase = 'https://dstcontrols.pica.pipreview.com/piwebapi';

        var service = {
            setToken: setToken,
            queryPoints: queryPoints
        }

        function setToken(newToken) {
            token = newToken;
            $http.defaults.headers.common.Authorization = 'Bearer ' + token;
        }

        function queryPoints(queryString) {

            $http({ method: 'get', responseType: 'json', url: urlBase, widthCredentials: true })
            return $http.get(urlBase);
        }

        return service;
    };
}());