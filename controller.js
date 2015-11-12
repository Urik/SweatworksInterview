'use strict';

/**
 * Testapp for Sweatworks repo
 * I'm using an All-Directives approach base on this article https://medium.com/@bluepnume/sane-scalable-angular-apps-are-tricky-but-not-impossible-lessons-learned-from-paypal-checkout-c5320558d4ef
 * because this Component-based code style is very similar to Angular 2 & React and it helps organize the project
 */

// No need to use the array form ['$scope', ...] since we are not minimizing
// Tools like gulp/grunt have plugins such us ngAnnotate which add the angular annotations when minimizing
angular.module('test', [])
  /**
   * Main Component
   * Contains the entire application
   */
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
        appCtrl.parity = null;

        appCtrl.changeAlignment = function changeAligment (alignment) {
          appCtrl.alignment = alignment;
        };

        appCtrl.changeParity = function changeParity (parity) {
          appCtrl.parity = parity;
        }

      },
      controllerAs  : 'appCtrl'
      // No need for linking function since we are not manipulating the DOM, just adding some logic
    }
  })
  /**
   * Panel Component, switchs content left or right based on the 'alignment' parameter
   */
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
  /**
   * List Component
   * Renders a list of numbers based on the min/max values and displays accordingly to the parity argument
   * null -> all numbers, true -> even numbers, false -> odd numbers
   */
  .directive('testList', function () {
    return {
      restrict    : 'E',
      scope       : {
        min     : '=',
        max     : '=',
        parity  : '='
      },
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
  /**
   * Parity Filter
   * Checks a collection of numbers for parity and returns a new collection based on the 'parity' argument
   */
  .filter('parityFilter', function () {
    return function (items, parity) {
      var filtered = [];

      if(Object.prototype.toString.call(items) !== '[object Array]') {
        console.error('parityFiler Error:', 'Array expected, got', typeof items);
        return;
      }

      filtered = items.filter(function (item) {

        if (typeof item !== 'number') {
          throw new TypeError('Expecting a collection of numbers');
        }

        if (parity === null) {
          return true;
        }

        var even = (item % 2 === 0);

        // XOR does the trick!
        return even ^ !parity;

      });

      return filtered;

      }
  })
  /**
   * Setting up some references values so we don't make Typos ;)
   */
  .factory('Alignments', function () {
    return {
      LEFT  : 'left',
      RIGHT : 'right'
    }
  })