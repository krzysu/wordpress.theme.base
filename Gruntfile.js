module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-stylus');

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

    // concat: {
    //   options: {
    //     banner: '/*\n' +
    //     ' * <%= pkg.name %>\n' +
    //     ' * \n' +
    //     ' * description: <%= pkg.description %>\n' +
    //     ' * version: <%= pkg.version %>\n' +
    //     ' * author: <%= pkg.author %>\n' +
    //     ' * website: <%= pkg.website %>\n' +
    //     ' * \n' +
    //     ' * build on <%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //     ' * released under <%= pkg.license %> License, 2012\n' +
    //     '*/ \n'
    //   },
    //   main: {
    //     src: ['js/jquery.flot.tooltip.source.js'],
    //     dest: 'js/jquery.flot.tooltip.js'
    //   }
    // },

    uglify: {
      main: {
        src: ['javascripts/main.js'],
        dest: 'javascripts/main.js'
      }
    },

    stylus: {
      main: {
        // options: {
        //   use: [
        //     require('nib') // use stylus plugin at compile time
        //   ]
        // },
        files: {
          './style.css': [
            'stylesheets/**/*.styl'
          ]
        }
      }
    },

    watch: { // for development run 'grunt watch'
      js: {
        files: ['javascripts/sources/**/*.coffee', 'javascripts/libs/**/*.js'],
        tasks: ['coffee:main', 'concat:libs', 'concat:main']
      }
    }
  });

  // defined tasks
  grunt.registerTask('build:js', ['jshint', 'coffee:main', 'concat:libs', 'concat:main', 'uglify:main']);
  grunt.registerTask('build:css', ['jshint', 'stylus:main']);
  grunt.registerTask('build:all', ['build:js', 'build:css']);

};
