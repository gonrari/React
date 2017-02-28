module.exports = function(grunt) {

    grunt.initConfig({
    	babel: {
	        options: {
	            sourceMap: true,
	            presets: ['es2015']
	        },
	        dist: {
	            files: {
	            	'src/index.js': 'js/index.js'
	            }
	        }
	    },
        uglify: {
			options: {
				sourceMap: true,
				sourceMapName: 'src/sourcemap.map'
			},
			my_target: {
				files: {
					'src/index.min.js': 'src/index.js'
				}
			}
        }
    });

    // Load plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');

    // Task
    grunt.registerTask('default', ['babel', 'uglify']);
    //grunt.registerTask("watch", ["typescript:watch"]);

};