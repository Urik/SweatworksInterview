describe('even filter test', function() {
    'use strict'; 

    var filter;

    beforeEach(function() {
        module('test');

        inject(function($filter) {
            filter = $filter('even');
        });
    });

    it('should fail unless given multiples of 2', function() {
        expect(filter(7)).toBe(false);
        expect(filter(9)).toBe(false);
    });
    
    it('should succeed when given multiples of 2', function() {
        expect(filter(6)).toBe(true);
        expect(filter(8)).toBe(true);
    });
});