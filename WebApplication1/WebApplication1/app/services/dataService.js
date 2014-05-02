(function () {
    'use strict';
    var serviceId = 'dataService';
    angular.module('mainApp').factory(serviceId, ['$http', '$rootScope', dataService]);

    function dataService($http, $rootScope) {
        var token = "";
        var urlBase = 'https://dstcontrols.pica.pipreview.com/piwebapi';
        var urlPoints = 'https://dstcontrols.pica.pipreview.com/piwebapi/dataservers/s0Qa5d6arWhEOuA0xABcex-wZW5nLWRldjAz/points';
        var urlDataServers = 'https://dstcontrols.pica.pipreview.com/piwebapi/dataservers';

        var service = {
            setToken: setToken,
            queryPoints: queryPoints
        }

        function setToken(newToken) {
            token = newToken;
            $http.defaults.headers.common.Authorization = 'Bearer ' + token;
        }

        function queryPoints(queryString) {
            if (queryString === undefined || queryString == null) {
                queryString = "";
            }

            var queryURL = urlPoints + '?nameFilter=' + queryString;

            return $http({ method: 'get', responseType: 'json', url: queryURL, withCredentials: true })
                .then(querySuccess, queryError);
        }

        function querySuccess(result) {
            if (result.data.Items == "") {
                alert("No items were found");
            }
            else {
                var items = [];

                for (var i = 0; i < result.data.Items.length; i++) {
                    items.push({
                        tagName: result.data.Items[i].Name,
                        tagDetailUrl: result.data.Items[i].Links.Value
                    });
                }

                for (var k = 0; k < items.length; k++) {
                    $http({ method: 'get', responseType: 'json', url: items[k].tagDetailUrl, withCredentials: true })
                        .then(function pointQuerySuccess(results) {
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].tagDetailUrl == results.config.url) {
                                    items[j].timeStamp = results.data.Timestamp.toLocaleString();
                                    if (results.data.Value.Name !== undefined) {
                                        items[j].value = results.data.Value.Name;
                                    }
                                    else {
                                        items[j].value = results.data.Value;
                                    }
                                    
                                    $rootScope.$broadcast('newResults', items);
                                }
                            }
                        },
                        function pointQueryFailure(data,status,headers,config) {
                            alert("Point query failed");
                        })
                }
            }
            return;
        }

        function queryError(data, status, headers, config) {
            alert("Query failed");
        }

        return service;
    };
}());