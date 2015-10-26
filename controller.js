angular.module('test', [])
.controller('testController', ['$scope', function($scope) {

}])
.filter('range', function () {
    return function (array, start, stop, step) {
        if (stop == null) {
            stop = start || 0;
            start = 0;
        }
        step = step || 1;

        var length = Math.max(Math.ceil((stop - start) / step), 0);
        var range = Array(length);

        for (var idx = 0; idx <= length; idx++, start += step) {
            range[idx] = start;
        }

        return range;
    };
})
.filter('skip', function () {
    return function (nums, show) {
        var evens = [];
        var odds = [];
        for (var i = 0; i < nums.length; i++) {
            if ((nums[i] % 2) != 1) {
                evens.push(nums[i]);
            } else {
                odds.push(nums[i]);
            }
        }

        if(show === undefined) {
            return nums;
        } else {
            return show ? evens : odds;
        }
    };
});
