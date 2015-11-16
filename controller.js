var app = angular.module('test', []);

angular.module('test')
  .controller('testController', ['$scope', function($scope) {
    $scope.isAny = function () { return true; };
    $scope.filteredItems = [];
    $scope.minNumber = 0;
    $scope.maxNumber = 10;
    $scope.currentFilter = $scope.isAny;

    $scope.isEven = function (i) {
      return (i % 2 === 0);
    }
    $scope.isOdd = function (i) {
      return (i % 2 === 1);
    }
    $scope.buildList = function (filter) {
      var i = $scope.minNumber;
      var j = $scope.maxNumber;

      $scope.currentFilter = filter || $scope.currentFilter;
      $scope.filteredItems = [];

      for (i; i <= j; i++) {
        if ($scope.currentFilter(i)) {
          $scope.filteredItems.push(i);
        }
      }
    }

    $scope.buildList();

  }]);