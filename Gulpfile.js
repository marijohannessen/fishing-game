var gulp = require('gulp');
var sass = require('gulp-sass');
var nano = require('gulp-cssnano');

gulp.task('sass', function () {
  return gulp.src('styles/main.scss')
    .pipe(sass({
        includePaths: ['_sass'],
    }))
    .pipe(nano())
    .pipe(gulp.dest('./styles'));
});
