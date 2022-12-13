var gulp = require("gulp");
var plumber = require('gulp-plumber'); //error handler
var prettify = require('gulp-prettify'); //properly formats HTML
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin'); //html uglify
cheerio = require('gulp-cheerio'); //jquery


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
    gulp.src('./jury/excuse.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(prettify())
        .pipe(gulp.dest('./jury/')); //DUDE, CHANGE ME
});
gulp.task('unstyle', async function(resolve) {
    gulp.src('./jury/excuse.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(
            cheerio(function($, file) {
                $("*").removeAttr("onchange");
            }),
          )
        .pipe(gulp.dest('./jury/')); //DUDE, CHANGE ME
});