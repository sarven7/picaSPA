(function () {
    'use strict';
    
    var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate']);

    mainApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', { //redirects to server login, gets cookie with token
                    templateUrl: 'app/views/list.html',
                    controller: 'loginAndRedirect'
                }).
                when('/tagSearch', {
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