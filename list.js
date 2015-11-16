angular.module('test')
  .directive('list', function() {
    var rightAlignClass = 'list-right';
    return {
      restrict: 'E',
      scope: {
        items: '=',
        currentFilter: '=',
        align: '=',
      },
      template: '<ul><li ng-repeat="item in items">{{item}}</li></ul>',
      link: function ($scope, elem, attrs) {
        $scope.$watch('align', function(newValue, oldValue) {
          if (newValue) {
            if (newValue == 'right') {
              elem.addClass(rightAlignClass);
            } else {
              elem.removeClass(rightAlignClass);
            }
          }
        });
      }
    };
  });