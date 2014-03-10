'use strict';

(function() {
    describe('yui', function() {
        var Y;

        before(function(done) {
            Y = YUI().use(
                'node', function(Y) {
                done();
            });
        });

        it('should be loaded', function() {
            expect(Y.Node).to.exist;
            expect(Y.App).to.not.exist;
        });
    });
})();
