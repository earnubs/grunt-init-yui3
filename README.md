grunt-init-yui
==============

This grunt-init task will create a YUI3 Module folder, fork it and make sure the templates suit your setup (there's currently some junk in there from our setup).

Install grunt-init:


    npm install -g grunt-init
    mkdir ~/.grunt-init/ && cd $_
    git clone git@github.com:earnubs/grunt-init-yui3.git

Create your module:

    mkdir js/myModule
    cd js/myModule
    grunt-init yui3

The default module name will be taken from the folder name within which you call
grunt-init.
