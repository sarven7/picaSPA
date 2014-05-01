(function () {
    'use strict';
    
    var mainApp = angular.module('mainApp', ['ngRoute','ngAnimate','ngLocale','ngSanitize']);

    mainApp.config(['$routeProvider', '$httpProvider',
        function($routeProvider, $httpProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'app/views/redirectToLogin.html',
                    controller: 'loginAndRedirect'
                }).
                when('/search', {
                    templateUrl: 'app/views/list.html',
                    controller: 'search'
                }).
                when('/tagDetail/:tagId', {
                    templateUrl: 'app/views/detail.html',
                    controller: 'tagDetail'
                }).
                when('/saveToken', {
                    templateUrl: 'app/views/redirectToLogin.html',
                    controller: 'saveToken'
                }).
                otherwise({
                    redirectTo: '/search'
                });
        }
    ]);
    
    mainApp.run(['$route', function ($route) {

    }]);
})();