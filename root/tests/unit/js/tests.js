'use strict';

(function() {
    describe('scaffold test', function() {
        var Y;

        before(function(done) {
            Y = YUI().use(
                '{%= name %}', function(Y) {
                done();
            });
        });

        it('should be replaced', function() {
            expect(false).to.be.ok;
        });
    });
})();
