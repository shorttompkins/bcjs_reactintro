var gulp = require('gulp'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    del = require('del'),
    nodemon = require('gulp-nodemon'),
    source = require('vinyl-source-stream');

gulp.task('clean', function(cb) {
  del(['samples/build/*'], cb);
});

gulp.task('build1', function () {
  browserify({
    entries: 'samples/src/helloworld/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { stage: 0})
  .bundle()
  .pipe(source('helloworld.js'))
  .pipe(gulp.dest('samples/build'));
});

gulp.task('build2', function () {
  browserify({
    entries: 'samples/src/statecounter/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { stage: 0})
  .bundle()
  .pipe(source('statecounter.js'))
  .pipe(gulp.dest('samples/build'));
});

gulp.task('build3', function () {
  browserify({
    entries: 'samples/src/person/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { stage: 0})
  .bundle()
  .pipe(source('person.js'))
  .pipe(gulp.dest('samples/build'));
});

gulp.task('build4', function () {
  browserify({
    entries: 'samples/src/people/app.js',
    extensions: ['.js'],
    debug: true
  })
  .transform(babelify, { stage: 0})
  .bundle()
  .pipe(source('people.js'))
  .pipe(gulp.dest('samples/build'));
});

gulp.task('default', ['clean', 'build1', 'build2', 'build3', 'build4']);
