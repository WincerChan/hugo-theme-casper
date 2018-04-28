let gulp = require('gulp'),
    minifycss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
// 压缩 css
gulp.task('minifycss', () =>{
    return gulp.src('static/css/*.css')
    .pipe(concat('main.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./dist'))
})
gulp.task('minifyjs', function() {
    return gulp.src('static/js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})

gulp.task('default', function() {
    gulp.start('minifyjs', 'minifycss');
})