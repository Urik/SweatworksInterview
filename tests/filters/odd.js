describe('odd filter test', function() {
    'use strict'; 

    var filter;

    beforeEach(function() {
        module('test');

        inject(function($filter) {
            filter = $filter('odd');
        });
    });

    it('should succeed unless given multiples of 2', function() {
        expect(filter(7)).toBe(true);
        expect(filter(9)).toBe(true);
    });
    
    it('should fail when given multiples of 2', function() {
        expect(filter(6)).toBe(false);
        expect(filter(8)).toBe(false);
    });
});