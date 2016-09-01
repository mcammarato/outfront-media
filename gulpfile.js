var gulp        = require('gulp'),
    watch       = require('gulp-watch'),
    sass        = require('gulp-sass');

// Update Css file
gulp.task('styles', function () {
  return gulp.src('client/app/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('client/app/css'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('client/app/scss/**/*.scss',['styles']);
});
