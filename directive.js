angular.module('test')
    .directive('numberList', function () {
        return {
            restrict: 'E',
            scope: {
                boundaries: '=',
                parity: '='
            },
            controller: ['$scope', function(s) {
                s.$watchGroup(['boundaries.min', 'boundaries.max'], function() {
                    var start = s.boundaries.min,
                        stop = s.boundaries.max,
                        list = [];

                    while (start <= stop) {
                       list.push(start++);
                    }

                    s.list = list;
                });

                s.filter = function (value) {
                    if (s.parity === 'even') {
                        return Math.abs(value % 2) === 0;
                    } else if (s.parity === 'odd') {
                        return Math.abs(value % 2) === 1;
                    }

                    return true;
                };
            }],
            templateUrl: './number-list.html'
        };
    })
