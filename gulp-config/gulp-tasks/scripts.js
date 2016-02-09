/* jshint node: true */

module.exports = function(gulp, options, plugins) {
    var browserify = require('browserify');
	var source = require('vinyl-source-stream');

	gulp.task('scripts:clean', function() {
		var srcOptions = {
			read: false
		};

		return gulp.src('./build/**/*.js', srcOptions)
			.pipe(plugins.clean());
	});

	gulp.task('scripts:compile', function() {
		return browserify('./js/app.js')
			.bundle()
			.pipe(source('bundle.js'))
			.pipe(gulp.dest('./build'));
    })


    gulp.task('scripts:build', ['scripts:clean', 'scripts:compile']);

};
