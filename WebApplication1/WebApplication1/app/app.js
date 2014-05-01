(function () {
    'use strict';
    
    var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate']);

    mainApp.config(['$routeProvider', '$httpProvider',
        function($routeProvider, $httpProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/views/list.html',
                    controller: 'search'
                }).
                when('/tagDetail/:tagId', {
                    templateUrl: 'app/views/detail.html',
                    controller: 'tagDetail'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }
    ]);
    
    mainApp.run(['$route', function ($route) {

    }]);
})();