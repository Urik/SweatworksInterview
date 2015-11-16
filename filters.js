angular.module('test.filters', [])
.filter('divisibleBy', function() {
        return function(dividend, divisor) {
                return dividend % divisor === 0;
        };
})
.filter('even', ['$filter', function($filter) {
        return function(number) {
                return $filter('divisibleBy')(number, 2);
        };
}])
.filter('odd', ['$filter', function($filter) {
        return function(number) {
                return !$filter('even')(number);
        };
}]);