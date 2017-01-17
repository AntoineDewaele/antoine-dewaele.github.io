var gulp = require('gulp');

/* Plugins */
var plugins = require('gulp-load-plugins')();
var del = require('del');

/* Paths */
var source = './src/assets/';
var destination = './dist/assets/';

/* Tasks */
gulp.task('clean:css', function () {
    return del(destination + 'stylesheets/*.css');
});

gulp.task('compile:css', ['clean:css'], function () {
    return gulp.src([source + 'stylesheets/*.less', source + 'stylesheets/*.css'])
        .pipe(plugins.less())
        .pipe(plugins.csscomb())
        .pipe(plugins.jsbeautifier())
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest(destination + 'stylesheets/'));
});

gulp.task('build:css', ['compile:css'], function () {
    return gulp.src(destination + 'stylesheets/*.css')
        .pipe(plugins.concatCss('styles.min.css'))
        .pipe(plugins.cleanCss())
        .pipe(gulp.dest(destination + 'stylesheets/'));
});

gulp.task('clean:javascript', function() {
    return del(destination + 'javascripts/*.js');
});

gulp.task('compile:javascript', ['clean:javascript'], function () {
    return gulp.src([source + 'javascripts/*.coffee', source + 'javascripts/*.js'])
        .pipe(plugins.coffee({
            bare: true
        }))
        .pipe(plugins.jsbeautifier())
        .pipe(gulp.dest(destination + 'javascripts/'));
});

gulp.task('build:javascript', ['compile:javascript'], function () {
    return gulp.src(destination + 'javascripts/*.js')
        .pipe(plugins.uglify())
        .pipe(plugins.rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(destination + 'javascripts/'));
});

gulp.task('clean:images', function() {
    return del(destination + 'images/*');
});

gulp.task('build:images', ['clean:images'], function () {
    return gulp.src(source + 'images/*')
        .pipe(plugins.imagemin())
        .pipe(gulp.dest(destination + 'images/'));
});

gulp.task('build', ['build:css', 'build:javascript', 'build:images']);

gulp.task('watch', function () {
    gulp.watch(source + 'stylesheets/*', ['build:css']);
    gulp.watch(source + 'javascripts/*', ['build:javascript']);
    gulp.watch(source + 'images/*', ['build:images'])
});