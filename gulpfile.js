var del     = require('del')
  , gulp    = require('gulp')
  , header  = require('gulp-header')
  , rename  = require('gulp-rename')
  , trim    = require('gulp-trimlines')
  , uglify  = require('gulp-uglify')
  , pkg     = require('./package.json')


var headerLong = ['/*!'
  , '* <%= pkg.name %> - <%= pkg.description %>'
  , '* @version <%= pkg.version %>'
  , '* <%= pkg.homepage %>'
  , '*'
  , '* @copyright <%= pkg.author %>'
  , '* @license <%= pkg.license %>'
  , '*/;'
  , ''].join('\n')

var headerShort = '/*! <%= pkg.name %> v<%= pkg.version %> <%= pkg.license %>*/;'

gulp.task('clean', function() {
  return del([ 'dist/*' ])
})

gulp.task('copy', ['clean'], function() {
  return gulp.src('src/svg.shapes.js')
    .pipe(header(headerLong, { pkg: pkg }))
    .pipe(trim({ leading: false }))
    .pipe(gulp.dest('dist'))
})

/**
 ‎* uglify the file
 * add the license info
 */
gulp.task('minify', ['copy'], function() {
  return gulp.src('dist/svg.shapes.js')
    .pipe(uglify())
    .pipe(rename({ suffix:'.min' }))
    .pipe(header(headerShort, { pkg: pkg }))
    .pipe(gulp.dest('dist'))
})


gulp.task('default', ['clean', 'copy', 'minify'])