const {
  src,
  dest,
  parallel,
  watch
} = require('gulp');
const gulpEsbuild = require('gulp-esbuild');
const sass = require('gulp-sass')(require('sass'));
const gp = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

const isProd = process.env.NODE_ENV === 'production';

const jsBuild = () => {
  return src('./src/js/*.js')
    .pipe(gulpEsbuild({
      outdir: 'js/',
      format: 'esm',
      bundle: true,
      sourcemap: !isProd,
      minify: isProd
    }))
    .pipe(dest('./dist'))
    .pipe(browserSync.stream())
}

const html = () => src('./src/index.html')
  .pipe(dest('./dist'))
  .pipe(browserSync.stream())

const styles = () => src('./src/sass/style.sass')
  .pipe(gp.if(!isProd, gp.sourcemaps.init()))
  .pipe(sass())
  .pipe(gp.groupCssMediaQueries())
  .pipe(gp.if(isProd, gp.autoprefixer()))
  .pipe(gp.if(isProd, gp.cleanCss({
    level: {
      1: {
        specialComments: 0,
        removeEmpty: true,
        removeWhitespace: true
      },
      2: {
        mergeMedia: true,
        removeEmpty: true,
        removeDuplicateFontRules: true,
        removeDuplicateMediaBlocks: true,
        removeDuplicateRules: true,
        removeUnusedAtRules: false
      }
    }
  })))
  .pipe(gp.if(!isProd, gp.sourcemaps.write("./maps/")))
  .pipe(dest('./dist/css'))
  .pipe(browserSync.stream())

const fonst = () => src('./src/fonts/*')
  .pipe(dest('./dist/fonts'))
  .pipe(browserSync.stream())

const img = () => src('./src/img/*')
  .pipe(dest('./dist/img'))
  .pipe(browserSync.stream())

const vendorCss = () => src('./src/css/*.css')
  .pipe(dest('./dist/css'))
  .pipe(browserSync.stream())

const browser = () => browserSync.init({
  server: {
    baseDir: './dist/'
  },
  port: 3000,
  notify: false
})

const watchFiles = () => {
  watch('./src/sass/**/*', styles);
  watch('./src/js/**/*', jsBuild);
  watch('./src/index.html', html);
}
  
const build = parallel(html, fonst, img, jsBuild, vendorCss, styles);
const dev = parallel(build, watchFiles, browser)

exports.build = build;
exports.dev = dev;