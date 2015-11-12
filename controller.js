angular.module('test', [])
.controller('testController', ['$scope', function($scope) {
	
	$scope.show_full = 1;
	$scope.show_even = 0;
	$scope.show_odd = 0;
	$scope.list_array = [];
			
	$scope.showAllNumbers = function(){
		$scope.list_array = [];
		$scope.show_full = 1;
		$scope.show_even = 0;
		$scope.show_odd = 0;
		for (i = $scope.min_number; i <= $scope.max_number; i++) { 
			$scope.list_array.push (i);
		}
		
	}
	
	$scope.showOddNumbers = function(){
		$scope.showAllNumbers();
		$scope.show_odd = 1;
		$scope.show_full = 0;
		$scope.show_even = 0;
	}
	
	$scope.showEvenNumbers = function(){
		$scope.showAllNumbers();
		$scope.show_full = 0; 
		$scope.show_even = 1;
		$scope.show_odd = 0;
	}
	
	
	
}]);
