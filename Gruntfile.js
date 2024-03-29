module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      files: [
        'Gruntfile.js'
      ]
    },

    coffee: {
      main: {
        files: {
          'javascripts/main.js': [
            'javascripts/sources/main.coffee',
            'javascripts/sources/**/*.coffee'
          ]
        }
      }
    },

    concat: {
      options: {
        separator: ';\n'
      },
      libs: {
        src: [
          'javascripts/libs/jquery-1.7.2.min.js',
          'javascripts/libs/**/*.js'
        ],
        dest: 'javascripts/libs.js'
      },
      main: {
        src: [
          'javascripts/libs.js',
          'javascripts/main.js'
        ],
        dest: 'javascripts/main.js'
      }
    },

    uglify: {
      main: {
        src: ['javascripts/main.js'],
        dest: 'javascripts/main.js'
      }
    },

    stylus: {
      main: {
        files: {
          './style.css': [
            'stylesheets/main.styl'
          ]
        }
      }
    },

    cssmin: {
      main: {
        options: {
          banner: '/*\n' +
          ' * Theme Name: <%= pkg.name %>\n' +
          ' * Theme URI: <%= pkg.website %>\n' +
          ' * Description: <%= pkg.description %>\n' +
          ' * Version: <%= pkg.version %>\n' +
          ' * Author: <%= pkg.author %>\n' +
          ' * Tags: <%= pkg.tags %>\n' +
          ' *\n' +
          ' * build on <%= grunt.template.today("yyyy-mm-dd") %>\n' +
          '*/\n'
        },
        files: {
          './style.css': [
            './style.css'
          ]
        }
      }
    },

    watch: { // for development run 'grunt watch'
      js: {
        files: ['javascripts/sources/**/*.coffee', 'javascripts/libs/**/*.js'],
        tasks: ['coffee:main', 'concat:libs', 'concat:main']
      },
      css: {
        files: ['stylesheets/**/*.styl'],
        tasks: ['stylus:main', 'cssmin:main']
      }
    }
  });

  // defined tasks
  grunt.registerTask('build:js', ['jshint', 'coffee:main', 'concat:libs', 'concat:main', 'uglify:main']);
  grunt.registerTask('build:css', ['jshint', 'stylus:main', 'cssmin:main']);
  grunt.registerTask('build:all', ['build:js', 'build:css']);

};
