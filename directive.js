angular.module('test.directives', [])
.directive('numbers', function() {
        return {
                restrict: 'E',
                scope: {
                        from: '&',
                        to: '&'
                },
                controller: ['$scope', function($scope) {
                        $scope.numbers = function(from, to) {
                                var numbers = [];
                                for (var i = from; i <= to; i++) {
                                        numbers.push(i);
                                }
                                return numbers;
                        };
                }],
                template: '<div ng-repeat="number in numbers(from(), to())">{{number}}</div>'
        };
});