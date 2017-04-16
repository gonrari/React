module.exports = function(grunt) {

    grunt.initConfig({
    	babel: {
	        options: {
	            sourceMap: true,
	            plugins: ['transform-react-jsx'],
	            presets: ['es2015']
	        },
			jsx: {
				files: {
					'src/index.js': 'js/index.js'
				}
			},
	        dist: {
	            files: {
	            	'src/index.js': 'src/index.js'
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
        },
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['babel', 'uglify'],
				 options: {
			      spawn: false,
			    }
			}	
		}
    });

    // Load plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task
    grunt.registerTask('default', ['babel', 'uglify']);
    
    // JSX
    grunt.registerTask("jsx", ["babel:jsx"]);
};