const gulp = require('gulp');
const ts = require('gulp-typescript');
const sv = require('gulp-server-livereload');
const sass = require('gulp-sass') (require('sass'));
const { watch } = require('gulp');
 
function compileSass(cd) {
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
    cd();
}
function compileTs(cd) {
    return gulp.src('src/ts/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'main.js'
        }))
        .pipe(gulp.dest('dist/js'));
    cd();
}
function serverUp(cb) {
    gulp.src('dist')
    .pipe(sv({
      livereload: true,
      directoryListing: false,
      open: true
    }));
    cb();
}
function watchFiles(cb) {
    watch('src/ts/*.ts', compileTs);
    watch('./src/sass/**/*.scss', compileSass);    
}
const build = gulp.series(serverUp, watchFiles);
  
  exports.default = build;