const gulp = require('gulp');
const pug = require('gulp-pug');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');

const SRC = 'src/';
const DEST = 'dist/';

gulp.task('pug2html', () => {
  return gulp.src(SRC + 'pug/*.pug')
    .pipe(pug({
      filename: '*.html',
      pretty: false,
    }))
    .pipe(gulp.dest(DEST));
});

// Compile LESS into minified CSS
gulp.task('less2css', () => {
  return gulp.src(SRC + 'less/style.less')
    .pipe(less({
      compress: true,
    }))
    .pipe(autoprefixer({
      browsers: ['Last 5 versions',
                 '> 1%'],
    }))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest(DEST + 'css/'));
});

// Optimize images
gulp.task('optimize-images', () => {
  return gulp.src(SRC + 'images/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
    ], {
      verbose: true
    }))
    .pipe(gulp.dest(DEST + 'images/'));
});

// Copy fonts
gulp.task('copy-fonts', () => {
  return gulp.src(SRC + 'fonts/**/*')
    .pipe(gulp.dest(DEST + 'fonts'));
});

gulp.task('default', () => {
    gulp.start('build');
    gulp.watch(SRC + 'pug/*.pug', ['pug2html']);
    gulp.watch(SRC + 'less/*.less', ['less2css']);
});

gulp.task('build', ['pug2html', 'less2css', 'optimize-images', 'copy-fonts']);
