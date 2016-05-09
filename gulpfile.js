var gulp = require('gulp');
var pug = require('gulp-pug');
var less = require('gulp-less');
var rename = require('gulp-rename');


gulp.task('pug2html', function build() {
  return gulp.src(['index.pug','cv.pug'])
    .pipe(pug({
      filename: '*.html',
      pretty: false
    }))
    .pipe(gulp.dest('.'));
});

// Compile LESS into minified CSS
gulp.task('less2css', function () {
  return gulp.src('less/*.less')
    .pipe(less({
      compress: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/'));
});


gulp.task('default', function() {
    gulp.watch('*.pug', ['pug2html']);
    gulp.watch('less/*.less', ['less2css']);
})
