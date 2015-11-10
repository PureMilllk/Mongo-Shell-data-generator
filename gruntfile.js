var fs = require('fs');

module.exports = grunt => {
	'use strict';

	grunt.initConfig({
		test: {
			test: "Milk",
			src: "js/test.js",
			dest: "src/test.js"
		},
		multi: {
			test1: {
				test: 'test1'
			},
			test2: {
				test: 'test2'
			}
		}
	});


	grunt.registerTask('test', 'for test purpose', function () {

		var callback = this.async();

		grunt.config.requires('test.test');

		grunt.log.writeln(`\n
			grunt running \n\
			${ grunt.config.get('test.test') }\n\
			${ grunt.config.get('test.src') }\n\
			${ grunt.config.get('test.dest') }\n\
			`);
			fs.readFile(grunt.config.get('test.src'), function (err, data) {
				if (err) {
					grunt.log.writeln(`error: ${err}`);
				}
				fs.writeFile(grunt.config.get('test.dest'), data);
				callback(grunt.log.writeln('test done'));
			})
	});

	grunt.registerTask('run', 'All tasks', ['test']);

	grunt.registerMultiTask('multi', 'info', function () {
		grunt.log.writeln(this.data.test);
	});

}