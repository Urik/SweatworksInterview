angular.module('controller', [])
    .controller('testController', ['$scope', function($scope) {
        //creates an array of odd numbers between the 2 input numbers
        $scope.oddArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                if (i % 2 !== 0) {
                    $scope.listValues.push(i);
                }
            }
        };
        //creates an array of Even numbers between the 2 input numbers
        $scope.evenArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                if (i % 2 === 0) {
                    $scope.listValues.push(i);
                }
            }
        };
        //creates an array of  numbers between the 2 input numbers
        $scope.listArray = function() {
            $scope.listValues = [];
            for (var i = $scope.minValue; i <= $scope.maxValue; i++) {
                $scope.listValues.push(i);
            }
        };
        
    }]);