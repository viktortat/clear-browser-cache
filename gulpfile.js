var gulp = require('gulp');
var plug = require('gulp-load-plugins')();

var jsSource = [
    './App/JavaScript/Libraries/Angular/angular.js',
    './App/JavaScript/Libraries/bowser.js',
    './App/JavaScript/Src/app.js',
    './App/JavaScript/Src/controllers.js',
    './App/JavaScript/Src/directives.js',
    './App/JavaScript/Src/filters.js',
    './App/JavaScript/Src/services.js'
];

var sassSource = [
    './App/Content/Sass/*.scss'
];


gulp.task('watch', function () {
    gulp.watch(sassSource, ['styles']);
    gulp.watch('./App/JavaScript/Src/*.js', ['js']);
});

gulp.task('styles', function () {
    return gulp
        .src(sassSource)
        .pipe(plug.rubySass({ style: 'expanded' }))
        .pipe(plug.autoprefixer('last 2 version', 'ie8', 'ie9'))
        .pipe(gulp.dest('./Build/Css'))
        .pipe(plug.rename({ suffix: '.min' }))
        .pipe(plug.minifyCss())
        .pipe(gulp.dest('./Build/Css'));
});

gulp.task('js', function () {
    return gulp
        .src(jsSource)
        .pipe(plug.concat('all.js'))
        .pipe(gulp.dest('./Build/Js'))
        .pipe(plug.rename({ suffix: '.min' }))
        .pipe(plug.uglify({ mangle: true }))
        .pipe(gulp.dest('./Build/Js'));
});