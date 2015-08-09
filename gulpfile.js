var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var jsLibraries = [
    './assets/javascript/libraries/angular/angular.js',
    './assets/javascript/libraries/angular/angular-route.js',
    './assets/javascript/libraries/bowser.js',
];

var jsSource = [
    './app/*.js'
];

var sassSource = [
    './styles/*.scss'
];

gulp.task('watch', function () {
    gulp.watch(sassSource, ['styles']);
    gulp.watch(jsSource, ['js']);
    gulp.watch(jsSource, ['hint']);
});

gulp.task('styles', function () {
    return gulp
        .src(sassSource)
        .pipe(plug.rubySass({ style: 'expanded' }))
        .pipe(plug.autoprefixer('last 2 version', 'ie8', 'ie9'))
        .pipe(gulp.dest('./build/css'))
        .pipe(plug.rename({ suffix: '.min' }))
        .pipe(plug.minifyCss())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function () {
    return gulp
        .src(jsLibraries.concat(jsSource))
        .pipe(plug.concat('all.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(plug.rename({ suffix: '.min' }))
        .pipe(plug.uglify({ mangle: true }))
        .pipe(gulp.dest('./build/js'));
});

gulp.task('hint', function () {
    return gulp
        .src(jsSource)
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish'));
});