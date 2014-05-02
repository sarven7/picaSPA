//(function () {
'use strict';

angular.module('customFilters', []).filter('lookInside', function () {
    return function (array, item) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].Name == item) {
                return item;
            }
        }
    };
});
//});