var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var del = require('del');
var sass = require('gulp-sass');
var conf = require('./gulp.conf');

gulp.task('clean', function () {
  return del([conf.paths.build]);
});

gulp.task('styles', function () {
  return gulp.src(conf.paths.styles)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.build));
});

gulp.task('compile', function () {
  return gulp.src(conf.paths.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['babel-preset-es2015']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.build));
});

gulp.task('markup', function () {
  return gulp.src(conf.paths.markup)
    .pipe(gulp.dest('lib'));
});

gulp.task('build', ['clean', 'styles', 'markup', 'compile']);

gulp.task('watch', ['build'], function () {
  gulp.watch(conf.paths.src, ['compile']);
  gulp.watch(conf.paths.markup, ['markup']);
  gulp.watch(conf.paths.styles, ['styles']);
});