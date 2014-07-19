/*
 * grunt-notes
 * https://github.com/t93/grunt-notes
 *
 * Copyright (c) 2014 t93
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        notes: {
            default: {
                src: './'
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['notes']);
};
