const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

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

// Optimize images
gulp.task('optimize-images', () => {
  return gulp.src('images/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ], {
      verbose: true
    }))
    .pipe(gulp.dest('../images/'));
});


gulp.task('default', () => {
    gulp.start('build');
    gulp.watch('pug/*.pug', ['pug2html']);
    gulp.watch('less/*.less', ['less2css']);
});

gulp.task('build', ['pug2html', 'less2css', 'optimize-images']);
