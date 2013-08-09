YUI.add('{%= name %}-test', function (Y) {

var Assert = Y.Assert,
    suite;

suite = new Y.Test.Suite('  ');

suite.add(new Y.Test.Case({

    name: '',

    setUp : function () {

    },

    tearDown: function () {

    },

    " ": function() {

    }

}));

Y.Test.Runner.add(suite);

}, '@VERSION@', {
        requires: ['one-{%= name %}', 'test']
});
