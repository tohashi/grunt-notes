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
            example: {
                src: './',
                options: {
                    annotations: {
                        'xxx': {
                            name: 'XXX',
                            label: '♨ XXX',
                            color: 'cyan'
                        }
                    }
                }
            }
        }
    });

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['notes']);
};
