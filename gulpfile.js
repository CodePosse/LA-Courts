var gulp = require("gulp");
var cheerio = require('gulp-cheerio') //use jquery in gulp
var gutil = require('gulp-util'); //utilities
var plumber = require('gulp-plumber'); //error handler
var prettify = require('gulp-prettify'); //properly formats HTML
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var htmlmin = require('gulp-htmlmin'); //html uglify

gulp.task("default", async function() {
    gutil.log(gutil.colors.bgGreen.white.bold('GULP WORKS'), gutil.colors.bgRed.white.bold("type: \"gulp --tasks\" to list all tasks"));
});

gulp.task('miniHTML', async function() {
    gulp.src('./jury/*.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('./jury/')); //DUDE, CHANGE ME
});

gulp.task('prettyHTML', async function(resolve) {
    gulp.src('./jury/*.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(prettify())
        .pipe(gulp.dest('./jury/')); //DUDE, CHANGE ME
});