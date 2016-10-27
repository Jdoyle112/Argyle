// Include gulp
var gulp = require('gulp');

// Include Our Plugins
//var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var notify = require('gulp-notify');

// Lint Task
/*gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});*/

// Compile Our Sass
gulp.task('styles', function() {
    return gulp.src('./app/assets/styles/master.scss')
        .pipe(sass())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./app/assets/build'))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/assets/build'))
        .pipe(notify({ message: 'Styles task complete' }));        
});

// Concatenate & Minify JS
/*gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets/build'));
});*/

// Watch Files For Changes
gulp.task('watch', function() {
    //gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('./app/assets/styles/global/*.scss', ['styles']);
    gulp.watch('./app/assets/styles/sections/*.scss', ['styles']);
    gulp.watch('./app/assets/styles/base/*.scss', ['styles']);
});

// Default Task
gulp.task('default', function() {
  gulp.start('styles');
});
