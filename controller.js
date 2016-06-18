angular.module('test', [])
.controller('testController', ['$scope', function($scope) {

	//We set the initial values of max and min. So we have content in the inputs.
	$scope.minNumber = 0;
	$scope.maxNumber = 0;

	//Function that sets the 'side' variable to the correct side so we can add the correct class via ngClass.
	$scope.displayRight = function(){
		$scope.side = 'right';
	};

	//Function that sets the 'side' variable to the correct side so we can add the correct class via ngClass.
	$scope.displayLeft = function(){
		$scope.side = 'left';
	};

	//Function that updates the list of numbers between min number and max number.
	$scope.change = function(){

		$scope.list  = [];
		var lowEnd = $scope.minNumber;
		var highEnd = $scope.maxNumber;

		for (var i = lowEnd; i <= highEnd; i++) {
			$scope.list.push(i);
		}
	};

	//Function that show only the even numbers of the list.
	$scope.showEven = function(){
		$scope.change();
		$scope.evenList = [];
		angular.forEach($scope.list, function(item){
			if (item % 2 === 0) {
				$scope.evenList.push(item);
				$scope.list = $scope.evenList;
				return $scope.list;
			}
			else{
				return false;
			}
		});
	};

	//Function that show only the odd numbers of the list.
	$scope.showOdd = function(){
		$scope.change();
		$scope.oddList = [];
		angular.forEach($scope.list, function(item){
			if (item % 2 !== 0) {
				$scope.oddList.push(item);
				$scope.list = $scope.oddList;
				return $scope.list;
			}
			else{
				return false;
			}
		});
	};
}])
.directive('list', function() {
	//List directive especifying the type of element and template.
  return {
	restrict : "E",
    templateUrl: 'list.html'
  };
});
