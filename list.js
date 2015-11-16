angular.module('test')
  .directive('list', function() {
    return {
      restrict: 'E',
      scope: {
        items: '=',
        currentFilter: '='
      },
      template: '<ul><li ng-repeat="item in items">{{item}}</li></ul>',
    };
  });