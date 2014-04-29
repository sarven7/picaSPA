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
                when('/login', {  //redirects to server login, gets cookie with token
                    templateUrl: 'app/views/list.html',
                    controller: 'loginAndRedirect'
                }).
                when('/tagDetail/:tagId', {
                    templateUrl: 'app/views/detail.html',
                    controller: 'tagDetail'
                }).
                otherwise({
                    redirectTo: '/'
                });

            //$httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common['X-Requested-With'];
        }
    ]);
    
    mainApp.run(['$route', function ($route) {

    }]);
})();