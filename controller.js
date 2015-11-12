'use strict';

angular.module('test', [])
  // No need to use the array form ['$scope', ...] since we are not minimizing
  .directive('testApp', function () {
    return {
      restrict    : 'E',
      scope       : {},
      replace     : true,
      templateUrl : 'templates/test_app.html',
      controller  : function appController (Alignments) {
        var appCtrl = this;

        appCtrl.Alignments = Alignments;

        appCtrl.limit = {
          min : 0,
          max : 10
        };

        appCtrl.alignment = 'left';

        appCtrl.changeAlignment = function changeAligment (alignment) {
          appCtrl.alignment = alignment;
        };

        appCtrl.changeParity = function changeParity (parity) {
          appCtrl.parity = parity;
        }

        appCtrl.parity = null;

      },
      controllerAs  : 'appCtrl',
      link : {
        post : function postLink (scope, element, attributes) {

        }
      }
    }
  })
  .directive('testPanel' ,function () {
    return {
      restrict    : 'E',
      scope       : {
        alignment : '='
      },
      transclude  : true,
      replace     : true,
      templateUrl : 'templates/test_panel.html',
      link : {
        post : function postLink (scope, element, attributes) {
          scope.$watch('alignment', function (newval, oldval) {
            scope.align = 'align-' + newval;
          });
        }
      }
    }
  })
  .directive('testList', function () {
    return {
      restrict    : 'E',
      scope       : {
        min     : '=',
        max     : '=',
        parity  : '='
      },
      transclude  : true,
      replace     : true,
      templateUrl : 'templates/test_list.html',
      link : {
        post : function postLink (scope, element, attributes) {
          scope.getNumbers = function getNumbers () {

            var min = scope.min !== undefined ?
              scope.min !== null ? true : false
              : false;

            var max = scope.max !== undefined ?
              scope.max !== null ? true : false
              : false;

            if (min && max) {
              if (scope.min < scope.max) {

                var numbers = [];

                for (var i = scope.min; i <= scope.max; i++) {
                  numbers.push(i);
                }

                return numbers;
              }
            }
          }
        }
      }
    }
  })
  .filter('parityFilter', function () {
    return function (items, parity) {
      var filtered = [];

      if(Object.prototype.toString.call(items) !== '[object Array]') {
        console.error('parityFiler Error:', 'Array expected, got', typeof items);
        return;
      }

      filtered = items.filter(function (item) {
        var even = (item % 2 === 0);

        if (parity === null) {
          return true;
        }

        return even ^ !parity;

      });

      return filtered;

      }
  })
  .factory('Alignments', function () {
    return {
      LEFT  : 'left',
      RIGHT : 'right'
    }
  })