/**
 *
 * grunit-init-yui
 *
 * TODO add licence
 */

'use strict';

exports.description = "Create a YUI3 module, including tests.";

exports.notes = "Note: requires should be a valid JSON array of module names";

exports.after = "Great success!";

// warn if we overwrite any files matching the pattern, override with --force
exports.warnOn = "*";

exports.template = function(grunt, init, done) {
    init.process({}, [

                 init.prompt('name'),
                 init.prompt('version')

    ], function(err, props) {

        var files = init.filesToCopy(props);

        init.copyAndProcess(files, props, {noProcess: 'assets/**'});

        // All done!
        done();
    });
};
