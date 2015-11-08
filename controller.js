angular.module('test', []);

angular.module('test')
    .controller('testController', ['$scope', function (s) {
        s.parity = 'both';
        s.position = 'left';
        s.boundaries = {
            min: 0,
            max: 0
        };

        s.setPosition = function (value) {
            s.position = value;
        };

        s.setParity = function (value) {
            s.parity = value;
        };
    }]);
