module.exports = function(grunt) {

    grunt.initConfig({
        uglify: {
			options: {
				sourceMap: true,
				sourceMapName: 'src/sourcemap.map'
			},
			my_target: {
				files: {
					'src/index.min.js': ['js/index.js']
				}
			}
        }
    });

    // Load plugin
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Task
    //grunt.registerTask("base", ["typescript:base"]);
    //grunt.registerTask("watch", ["typescript:watch"]);

};