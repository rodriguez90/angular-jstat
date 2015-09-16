// gulp
var gulp = require('gulp'),
	concat 	= require('gulp-concat'),
	uglify 	= require('gulp-uglify'),
	rename 	= require('gulp-rename');

gulp.task('scripts', function GulpConcatTask () {
	return gulp.src([

			'js/pre.js',
			'bower_components/**/*/dist/*.min.js',
			'js/post.js'

		])
		.pipe(concat('angular-jstat.js'))
		.pipe(gulp.dest('dist'))
		.pipe(rename('angular-jstat.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('default', [
	'scripts'
]);