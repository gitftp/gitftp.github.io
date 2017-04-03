module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            js: {
                files: {
                    'assets/build.js': ['assets/build.js']
                }
            },
            css: {
                files: {
                    'assets/build.js': ['assets/build.js']
                }
            },
        },
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/angular/angular.min.js',
                    // 'bower_components/noty/js/noty/packaged/jquery.noty.packaged.min.js',
                    // 'bower_components/moment/min/moment.min.js',
                    // 'bower_components/angular-animate/angular-animate.min.js',
                    // 'bower_components/angular-sanitize/angular-sanitize.min.js',
                    // 'bower_components/angular-route/angular-route.min.js',
                    // 'bower_components/angular-moment/angular-moment.min.js',
                    // 'bower_components/ngstorage/ngStorage.min.js',
                    // 'bower_components/angular-bootstrap/ui-bootstrap.min.js',
                    'bower_components/angular-confirm/dist/angular-confirm.min.js',
                    'bower_components/Waves/dist/waves.min.js',
                    // 'bower_components/script.js/dist/script.min.js',
                    'assets/js/script.js',
                ],
                dest: 'assets/build.js',
            },
            css: {
                src: [
                    'bower_components/bootstrap/dist/css/bootstrap.min.css',
                    'assets/css/styles.css'
                ],
                dest: 'assets/build.css'
            }
        },
        watch: {
            js: {
                files: ['assets/js/*.js'],
                tasks: ['concat:js'],
            },
            css: {
                files: ['assets/css/*.less'],
                tasks: ['less:css', 'concat:css']
            }
        },
        less: {
            css: {
                files: {
                    'assets/css/styles.css': 'assets/css/styles.less'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('build', ['concat:js', 'less:css', 'concat:css']);

    grunt.registerTask('build-release', [
        'concat:js',
        'uglify:js',
        'less:css',
        'concat:css',
        'uglify:css'
    ]);

    grunt.registerTask('default', ['watch:js', 'watch:css']);
};