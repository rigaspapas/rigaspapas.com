var gulp = require('gulp');
var pug  = require('gulp-pug');

gulp.task('pug2html', function build() {
  return gulp.src(['index.pug','cv.pug'])
    .pipe(pug({
      filename: '*.html',
      pretty: false
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', function() {
    gulp.watch('*.pug', ['pug2html']);
})
