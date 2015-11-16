describe('numbers directive test', function() {
    var $compile,
        $rootScope;

    beforeEach(function() {
        module('test');

        inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        });
    });
    
    it('should add the list of numbers', function() {
        var element = $compile("<numbers from=\"3\" to=\"5\"></numbers>")($rootScope);
        
        $rootScope.$digest();
        
        expect(element.html()).toContain("3");
        expect(element.html()).toContain("4");
        expect(element.html()).toContain("5");
        
        expect(element.html()).not.toContain("2");
        expect(element.html()).not.toContain("6");
    });
});