var gulp = require('gulp');
var shell = require('gulp-shell');
// Include Our Plugins
var jshint  = require('gulp-jshint');
var sass    = require('gulp-sass');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');

gulp.task('default', function() {
    // place code for your default task here
    return gulp.src('*.js', {read: false})
        .pipe(shell([
            'npm start'
        ]))

});