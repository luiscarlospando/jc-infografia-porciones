var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
        'node_modules/fullpage.js/vendors/scrolloverflow.js',
        'assets/js/fullpage.fadingEffect.min.js',
        'node_modules/fullpage.js/dist/jquery.fullpage.extensions.min.js',
        'node_modules/outdatedbrowser/outdatedbrowser/outdatedbrowser.js',
        'assets/js/scripts.js'
    ])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(minify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src([
        'node_modules/fullpage.js/dist/jquery.fullpage.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/animate.css/animate.min.css',
        'node_modules/hover.css/css/hover-min.css',
        'node_modules/outdatedbrowser/outdatedbrowser/outdatedbrowser.min.css',
        'assets/css/styles.css'
    ])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('public/build/css'));
});

gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['pack-js']);
    gulp.watch('assets/css/*.css', ['pack-css']);
});

gulp.task('default', ['watch']);