var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('compile-classes',  function() {
  gulp.src('./src/classes/*.less')
      .pipe(concat('boxen-classes.less'))
      .pipe(gulp.dest('./built/'))
      .pipe(less({
        paths: './built/'
      }))
      .pipe(gulp.dest('./release/'));
});

gulp.task('compile-mixins',  function() {
  gulp.src('./src/mixins/*.less')
      .pipe(concat('boxen-mixins.less'))
      .pipe(gulp.dest('./release/'));
});

gulp.task('watch-less', function() {
  gulp.watch('./src/**/*.less', ['compile-classes', 'compile-mixins']);
});

gulp.task('default', ['compile-classes', 'compile-mixins', 'watch-less']);
