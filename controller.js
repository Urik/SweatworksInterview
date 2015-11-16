angular.module('test', [])
  .controller('testController', ['$scope', function($scope) {
    $scope.filteredItems = [1, 2, 3, 4, 5, 6];
  }]);