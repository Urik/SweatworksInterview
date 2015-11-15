(function() {
    'use strict';
    angular.module('test', [])
        .controller('testController', ['$scope', function($scope) {
            var testCtrl = this;
            testCtrl.parity = 'both';
            testCtrl.position = 'left';
        }])
        .directive('swNumberList', function() {
            return {
                template: '<div class="swnl-numbers-container"></div>',
                restrict: 'E',
                scope: {
                    min: '@',
                    max: '@',
                    parity: '@',
                    position: '@'
                },
                link: function(scope, element, attrs) {
                    var $numBox = element.children('div'),
                        listNumbers = function () {
                            var min = parseInt(attrs.min, 10),
                                max = parseInt(attrs.max, 10),
                                parity = attrs.parity || 'both',
                                displayNumbers = function() {
                                    var increment, mod2Min, mod2Max, i, html = '';
                                    increment = 1;
                                    if (parity !== 'both') {
                                        increment = 2;
                                        mod2Min = min%2;
                                        mod2Max = max%2;
                                        if ((mod2Min === 0 && parity === 'odd') || (mod2Min > 0 && parity === 'even')) {
                                            min += 1;
                                        }
                                        if ((mod2Max === 0 && parity === 'odd') || (mod2Max > 0 && parity === 'even')) {
                                            max -= 1;
                                        }
                                    }

                                    for (i=min; i<=max; i+=increment) {
                                        html += i + '<br>';
                                    }

                                    $numBox.html(html);
                                };

                            $numBox.empty();

                            if (isNaN(min) || isNaN(max)) {
                                return;
                            }

                            if (min > max) {
                                $numBox.html('Min value must be greater than Max value.');
                                return;
                            }

                            parity = ['both', 'odd', 'even'].indexOf(parity.toLowerCase()) >= 0 ? parity.toLowerCase() : 'both';

                            displayNumbers();
                        };

                    if ($numBox.length > 0) {
                        attrs.$observe('min', listNumbers);
                        attrs.$observe('max', listNumbers);
                        attrs.$observe('parity', listNumbers);
                        attrs.$observe('position', function(value) {
                            value = ['left', 'right'].indexOf(value.toLowerCase()) >= 0 ? value.toLowerCase() : 'left';
                            $numBox.css('text-align', value);
                        });
                    }
                }
            };
        });
}());