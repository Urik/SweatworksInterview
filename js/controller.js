angular.module('controller', [])
    .controller('testController', ['$scope', function($scope) {

        $scope.oddArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                if (i % 2 !== 0) {
                    $scope.listValues.push(i);
                }
            }
        };

        $scope.evenArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                if (i % 2 === 0) {
                    $scope.listValues.push(i);
                }
            }
        };

        $scope.listArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                $scope.listValues.push(i);
            }
        };
        
    }]);