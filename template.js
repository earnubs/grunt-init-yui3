/**
 *
 * grunit-init-yui
 *
 * Copyright (c) 2013 Canonical.
 * Licensed under the MIT license.
 *
 */

'use strict';

exports.description = "Create a YUI3 module, including tests.";

exports.after = "All done!";

// warn if we overwrite any files matching the pattern, override with --force
exports.warnOn = "*";

exports.template = function(grunt, init, done) {

    init.process({}, [

                 // the module name
                 // TODO submodules
                 init.prompt('name'),

                 init.prompt('description'),

                 // the module version
                 init.prompt('version'),


                 // should we use mocha rather than YUI Test

    ], function(err, props) {

        var files = init.filesToCopy(props);

        init.copyAndProcess(files, props, {noProcess: 'assets/**'});

        // All done!
        done();
    });
};
