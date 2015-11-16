angular.module('test.directives', [])
.directive('numbers', function() {
        return {
                restrict: 'E',
                scope: {
                        from: '&',
                        to: '&',
                        filter: '&',
                        position: '&'
                },
                controller: ['$scope', '$filter', function($scope, $filter) {
                        $scope.numbers = function(from, to, filterName) {
                                var numbers = [];
                                for (var i = from; i <= to; i++) {
                                        if (!filterName || $filter(filterName)(i)) {
                                                numbers.push(i);
                                        }
                                }
                                return numbers;
                        };
                }],
                template: ' <div class="{{\'pull-\'+(position()||\'left\')}}">                                  \
                                <div ng-repeat="number in numbers(from(), to(), filter())">{{number}}</div>     \
                            </div>'
        };
});