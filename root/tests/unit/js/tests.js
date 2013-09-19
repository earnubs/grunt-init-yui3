YUI.add('module-tests', function(Y) {

    /**
     * Suite silently failing with nothing logged? Something in setup is
     * throwing an error!
     */

    Y.Test.Runner.add(new Y.Test.Case({
        name: 'Automated Tests',
        'test is empty': function() {
            Y.Assert.fail('No Tests Provided For This Module');
        }
    }));

},'', { requires: [ 'test' ] });

