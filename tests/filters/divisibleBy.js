describe('divisibleBy filter test', function() {
    'use strict'; 

    var filter;

    beforeEach(function() {
        module('test');

        inject(function($filter) {
            filter = $filter('divisibleBy');
        });
    });

    it('should succeed when given natural divisors', function() {
        expect(filter(6,2)).toBe(true);
        expect(filter(6,3)).toBe(true);
    });
    
    it('should fail when given not natural divisors', function() {
        expect(filter(6,4)).toBe(false);
        expect(filter(6,5)).toBe(false);
    });
});