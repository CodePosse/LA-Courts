var gulp = require("gulp");
var plumber = require('gulp-plumber'); //error handler
var prettify = require('gulp-prettify'); //properly formats HTML
var htmlmin = require('gulp-htmlmin'); //html uglify
cheerio = require('gulp-cheerio'); //jquery


gulp.task('miniHTML', async function() {
    gulp.src('./jdp/*.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            minifyCSS: true,
            minifyJS: true
        }))
        .pipe(gulp.dest('./jdp/')); //DUDE, CHANGE ME
});

gulp.task('prettyHTML', async function(resolve) {
    gulp.src('./jdp/*.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(prettify())
        .pipe(gulp.dest('./jdp/')); //DUDE, CHANGE ME
});
gulp.task('unstyle', async function(resolve) {
    gulp.src('./jdp/excuse.html') //DUDE, CHANGE ME
        .pipe(plumber())
        .pipe(
            cheerio(function($, file) {
                $("span").removeAttr("id");
            }),
          )
          .pipe(prettify())
        .pipe(gulp.dest('./jdp/')); //DUDE, CHANGE ME
});
gulp.task('mega', gulp.series('miniHTML','prettyHTML'));