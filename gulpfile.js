    // /*!
    //  * gulp
    //  * urls scss /styles/*.scss, js /src/scripts
    //  * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
    //  */
    // // Load plugins
    // var gulp = require('gulp'),
    //   sass = require('gulp-ruby-sass'),
    //   autoprefixer = require('gulp-autoprefixer'),
    //   minifycss = require('gulp-clean-css'),
    //   // jshint = require('gulp-jshint'),
    //   uglify = require('gulp-uglify'),
    //   imagemin = require('gulp-imagemin'),
    //   rename = require('gulp-rename'),
    //   concat = require('gulp-concat'),
    //   notify = require('gulp-notify'),
    //   cache = require('gulp-cache'),
    //   livereload = require('gulp-livereload'),
    //   del = require('del');
    // // Styles
    // gulp.task('styles', function() {
    //   return sass('src/styles/*.scss', {
    //       style: 'expanded',
    //     })
    //     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    //     .pipe(gulp.dest('dist/styles'))
    //     .pipe(rename({
    //       suffix: '.min'
    //     }))
    //     .pipe(minifycss())
    //     .pipe(gulp.dest('dist/styles'))
    //     .pipe(notify({
    //       message: 'Styles task complete'
    //     }));
    // });
    // // Scripts
    // gulp.task('scripts', function() {
    //   return gulp.src('src/scripts/**/*.js')
    //     // .pipe(jshint('.jshintrc'))
    //     // .pipe(jshint.reporter('default'))
    //     .pipe(concat('main.js'))
    //     .pipe(gulp.dest('dist/scripts'))
    //     .pipe(rename({
    //       suffix: '.min'
    //     }))
    //     .pipe(uglify())
    //     .pipe(gulp.dest('dist/scripts'))
    //     .pipe(notify({
    //       message: 'Scripts task complete'
    //     }));
    // });
    // // Images
    // gulp.task('images', function() {
    //   return gulp.src('src/images/**/*')
    //     .pipe(cache(imagemin({
    //       optimizationLevel: 3,
    //       progressive: true,
    //       interlaced: true
    //     })))
    //     .pipe(gulp.dest('dist/images'))
    //     .pipe(notify({
    //       message: 'Images task complete'
    //     }));
    // });
    // // Clean
    // gulp.task('clean', function(cb) {
    //   del(['dist/assets/css', 'dist/assets/js', 'dist/assets/img'], cb)
    // });
    // // Default task
    // gulp.task('default', function() {
    //   gulp.start('styles', 'scripts', 'images');
    // });
    // // Watch
    // gulp.task('watch', function() {
    //   // Watch .scss files
    //   gulp.watch('src/styles/**/*.scss', ['styles']);
    //   // Watch .js files
    //   gulp.watch('src/scripts/**/*.js', ['scripts']);
    //   // Watch image files
    //   gulp.watch('src/images/**/*', ['images']);
    //   // Create LiveReload server
    //   livereload.listen();
    //   // Watch any files in dist/, reload on change
    //   gulp.watch(['dist/**']).on('change', livereload.changed);
    // });


    //my own version just push scss to css
    var gulp = require('gulp'),
      sass = require('gulp-ruby-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      minifycss = require('gulp-clean-css'),
      // jshint = require('gulp-jshint'),
      uglify = require('gulp-uglify'),
      imagemin = require('gulp-imagemin'),
      rename = require('gulp-rename'),
      concat = require('gulp-concat'),
      notify = require('gulp-notify'),
      cache = require('gulp-cache'),
      livereload = require('gulp-livereload'),
      del = require('del');

    gulp.task('styles', function() {
      return sass('sass/*.scss', {
          style: 'expanded',
        })
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('css/'))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('css/'))
        .pipe(notify({
          message: 'Styles task complete'
        }));
    });

    // Images
    gulp.task('images', function() {
      return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
        .pipe(notify({
          message: 'Images task complete'
        }));
    });
    // Default task
    gulp.task('default', function() {
      gulp.start('styles', 'images');
    });
    // Watch
    gulp.task('watch', function() {
      // Watch .scss files
      gulp.watch('sass/*.scss', ['styles']);
      // Watch .js files
      // gulp.watch('src/scripts/**/*.js', ['scripts']);
      // Watch image files
      gulp.watch('src/images/**/*', ['images']);
      // Create LiveReload server
      livereload.listen();
      // Watch any files in dist/, reload on change
      gulp.watch(['dist/**']).on('change', livereload.changed);
    });