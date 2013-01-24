module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {
        dist: {
          options : {
            // style: 'compressed',
            compass: true
          },
          files: {
            'app/public/css/style.css': 'app/dev/sass/style.sass',
            'app/public/css/bootstrap.css' :'app/dev/components/bootstrap-sass/vendor/assets/stylesheets/_bootstrap.scss'
          }
        }
      },
      coffee: {
        compile: {
          files: {
            'app/public/js/script.js': 'app/dev/coffee/*.coffee'
            }
          }
      },
      concat: {
        options: {
          separator: ';',
          stripBanners: true
        },
        dist: {
          src: [
            'app/dev/components/jquery/jquery.min.js',
            'app/dev/component(8)/bootstrap-sass/vendor/assets/javascripts/bootstrap-transition.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-alert.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-button.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-carousel.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-collapse.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-dropdown.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-modal.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-tooltip.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-popover.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-scrollspy.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-tab.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-typeahead.js',
            'app/dev/components/bootstrap-sass/vendor/assets/javascripts/bootstrap-affix.js'
            ],
          dest: 'app/public/js/main.js'
        }
      },
      watch: {
        coffee: {
          files: ['app/dev/coffee/*'],
          tasks: 'coffee'
        },
        sass: {
          files: ['app/dev/sass/*'],
          tasks: 'sass'
        },
        concat: {
          files: ['app/dev/components/bootstrap-sass/vendor/assets/javascripts/*'],
          tasks: 'concat'
        }
      }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', 'coffee sass');
};