/*
 * grunt-notes
 * https://github.com/t93/grunt-notes
 *
 * Copyright (c) 2014 t93
 * Licensed under the MIT license.
 */

'use strict';

var Notes = require('notes');

module.exports = function(grunt) {

    // TODO custom annotation
    // TODO ignore options
    grunt.registerMultiTask('notes', 'Enumerate annotations like todo, fixme, optimize or note', function() {
        var done = this.async();
        var notes = new Notes(this.src || './');

        notes.annotate(done);
    });

};
