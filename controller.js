angular.module('test', [])
.controller('testController', ['$scope', function($scope) {
	$scope.values = {
		minValue: 0,
		maxValue: 1
	};

	$scope.numberTypes = {
		evenNumbers: false,
		oddNumbers: false
	};

	$scope.updateList = function (){
		$scope.numbers = [];
		for(var i=$scope.values.minValue; i <= $scope.values.maxValue; i++){
			$scope.numbers.push(i);
		}
	};

	$scope.displayOnTheLeft = function () {
		$scope.displayOnClass = "on-left-side";
	};

	$scope.displayOnTheRight = function () {
		$scope.displayOnClass = "on-right-side";
	};

	$scope.showAll = function() {
		$scope.numberTypes.evenNumbers = false;
		$scope.numberTypes.oddNumbers = false;
	};

	$scope.showEvens = function() {
		$scope.numberTypes.evenNumbers = true;
		$scope.numberTypes.oddNumbers = false;
	};

	$scope.showOdds = function() {
		$scope.numberTypes.evenNumbers = false;
		$scope.numberTypes.oddNumbers = true;
	};	

	$scope.updateList();
}])
.directive('numbers', function() {
	return {
		restrict: 'E',
		templateUrl: 'numbers.html'
	};
});