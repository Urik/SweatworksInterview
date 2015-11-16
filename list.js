angular.module('test', [])
  .directive('list', function() {
    return {
      require: 'ngModel',
      restrict: 'E',
      templateUrl: '/partials/list.html',
      scope: {
        filter: '@'
      },
      link: function($scope, iElm, iAttrs, controller) {
        
      }
    };
  });