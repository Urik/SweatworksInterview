angular.module('filters', [])
    .directive('testFilters', function() {

        return {
            restrict: 'EA', // E = Element, A = Attribute, C = Class, M = Comment
            template: '<div ng-repeat = "value in listValues track by $index">{{value}}</div><br>',
        };
    });