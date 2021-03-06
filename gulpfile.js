// import gulp node-package
var gulp = require('gulp');
var clean = require("gulp-clean");
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
var del = require('del');

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src('dist')
 .pipe(clean());
});

gulp.task('scss', function() {
	return gulp.src(['src/scss/**/*.scss', 'src/scss/*.scss'])
		.pipe(sass())
		.pipe(gulp.dest('dist/css/'))
		.pipe(browserSync.stream());
});

gulp.task('copyFiles', function() {
	return gulp.src(['src/**/*', '!src/scss', '!src/scss/**/*'])
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.stream());
});

gulp.task('watch', function() {
	gulp.watch('src/scss/**', ['scss']);
	gulp.watch('src/**/*', ['copyFiles']);
});

gulp.task('browser-sync', function() {
	browserSync({
		notify: false,
		server: {
			baseDir: './dist/',
			index: 'index.html',
			port: 3000
		}
	});
});

gulp.task('default', function() {
	return runSequence(
		'clean',
		'browser-sync',
		'copyFiles',
		'scss',
		'watch'
	);
});
