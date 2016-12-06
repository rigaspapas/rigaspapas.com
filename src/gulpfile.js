const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const rename = require('gulp-rename');

gulp.task('pug2html', () => {
  return gulp.src('pug/*.pug')
    .pipe(pug({
      filename: '*.html',
      pretty: false,
    }))
    .pipe(gulp.dest('..'));
});

// Compile LESS into minified CSS
gulp.task('less2css', () => {
  return gulp.src('less/style.less')
    .pipe(less({
      compress: true,
    }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('../css/'));
});


gulp.task('default', () => {
    gulp.start('build');
    gulp.watch('pug/*.pug', ['pug2html']);
    gulp.watch('less/*.less', ['less2css']);
});

gulp.task('build', ['pug2html', 'less2css']);
