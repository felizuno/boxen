var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');

gulp.task('compile-less',  function() {
  gulp.src('./src/*.less')
      .pipe(concat('boxen.less'))
      .pipe(gulp.dest('./built/'))
      .pipe(less({
        paths: './built/'
      }))
      .pipe(gulp.dest('./release/'));
});

gulp.task('watch-less', function() {
  gulp.watch('./src/*.less', ['compile-less']);
});

gulp.task('default', ['compile-less', 'watch-less']);
