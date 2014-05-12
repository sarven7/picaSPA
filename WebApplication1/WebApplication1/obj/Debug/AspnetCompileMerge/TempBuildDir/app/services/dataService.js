(function () {
    'use strict';
    var serviceId = 'dataService';
    angular.module('mainApp').factory(serviceId, ['$http', '$rootScope', dataService]);

    function dataService($http, $rootScope) {
        var token = "";
        var urlBase = 'https://dstcontrols.pica.pipreview.com/piwebapi';
        var urlPoints = 'https://dstcontrols.pica.pipreview.com/piwebapi/dataservers/s0Qa5d6arWhEOuA0xABcex-wZW5nLWRldjAz/points';
        var urlDataServers = 'https://dstcontrols.pica.pipreview.com/piwebapi/dataservers';
        var urlPointDetails = 'https://dstcontrols.pica.pipreview.com/piwebapi/points/';
        var urlPointRecordedPoints = 'https://dstcontrols.pica.pipreview.com/piwebapi/streams/';

        var service = {
            setToken: setToken,
            queryPoints: queryPoints,
            getTagDetails: getTagDetails,
            getRecordedValues: getRecordedValues
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
                        webId: result.data.Items[i].WebId,
                        tagDetailUrl: result.data.Items[i].Links.Value
                    });
                }

                for (var k = 0; k < items.length; k++) {
                    $http({ method: 'get', responseType: 'json', url: items[k].tagDetailUrl, withCredentials: true })
                        .then(function pointQuerySuccess(results) {
                            for (var j = 0; j < items.length; j++) {
                                if (items[j].tagDetailUrl == results.config.url) {
                                    items[j].timeStamp = moment(results.data.Timestamp).format('MM/DD/YYYY HH:mm:ss A');
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

        function getTagDetails(webId) {
            return $http({ method: 'get', responseType: 'json', url: urlPointDetails + webId, withCredentials: true })
                .then(function (result) {
                    $rootScope.$broadcast('tagDetailReady', result.data);
                    return result.data;
                },
                function (data,status,headers,config) {
                    alert('Query for ' + webId + " failed.");
                    return null;
                });
        }
        
        function getRecordedValues(webId, startTime, endTime) {
            var url = buildRecordedPointsURL(webId, startTime, endTime);

            return $http({ method: 'get', responseType: 'json', url: url, withCredentials: true })
                .then(function (result) {
                    var filtered = DSFilter(result.data.Items);
                    $rootScope.$broadcast('recordedValuesReady', filtered);
                    return filtered;
                },
                function (data, status, headers, config) {
                    alert('Query for ' + webId + " failed.");
                    return null;
                });
        }

        function buildRecordedPointsURL(webId, startTime, endtime) {
            var url = urlPointRecordedPoints + webId + '/recorded?';
            url = url + "startTime=" + startTime + "&endTime=" + endtime + "";
            return url;
        }

        function DSFilter(result) {
            var filteredResults = [];
            for (var i = 0; i < result.length; i++) {
                var obj = new Object();
                if (result[i].Value.Name !== undefined) {
                    obj.Value = result[i].Value.Name;
                }
                else {
                    obj.Value = result[i].Value;
                }
                obj.Timestamp = moment(result[i].Timestamp).format('MM/DD/YYYY HH:mm:ss A'); 
                obj.Good = result[i].Good;
                obj.Questionable = result[i].Questionable;
                obj.Substituted = result[i].Substituted;
                filteredResults.push(obj);
            }
            return filteredResults;
        }

        return service;
    };
}());