angular.module('test', [])
  .directive('numbers', function() {
    return {
      templateUrl: 'numbers.html'
    };
  })

  .factory('numbersBuilder', function() {
    return {
      build: function() {
        return [];
      },

      getRange: function(min, max) {
        var items = [];
        if(min === '' && max === '') {
          return items;
        }

        if(max === '' && min) {
          items.push(min);
          return items;
        }

        if(min === '' && max) {
          items.push(max);
          return items;
        }

        for(var i = min; i <= max; i++) {
          items.push(i);
        }

        return items;
      }
    };
  })

  .controller('testController', ['$scope', 'numbersBuilder', function($scope, numbersBuilder) {
    function initController() {
      $scope.items = numbersBuilder.build();
      $scope.minNumber = '';
      $scope.maxNumber = '';
    }

    $scope.displayLeft = function() {
      $scope.floatRight = false;
    };

    $scope.displayRight = function() {
      $scope.floatRight = true;
    };

    $scope.generateRange = function() {
      $scope.items = numbersBuilder.getRange($scope.minNumber, $scope.maxNumber);
    };

    $scope.showAll = function() {
      $scope.showEvens = false;
      $scope.showOdds = false;
    };

    $scope.filterEvens = function() {
      $scope.showEvens = true;
      $scope.showOdds = false;
    };

    $scope.filterOdds = function() {
      $scope.showEvens = false;
      $scope.showOdds = true;
    };

    initController();

  }]);