var gulp = require('gulp');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sourcemaps = require('gulp-sourcemaps');
//var combine = require('gulp-magix-combine');
var clean = require('gulp-clean');
let combineToolConfig = require('./combine-tool-config')
let combineTool = require('magix-combine');
combineTool.config(combineToolConfig);
let srcFolder = combineToolConfig.tmplFolder
let buildFolder = combineToolConfig.srcFolder

gulp.task('clean', function() {
  return gulp.src('./build', {read: false})
    .pipe(clean())
})

gulp.task('compress', ['clean'], function(){
  combineTool.combine().then(function(){
    gulp.src(['app/**/*.js', '!app/views/**/*.js'])
      //.pipe(gulp.dest('./build/app_debug'))
      //.pipe(sourcemaps.init())
      .pipe(uglify({
        output: {ascii_only:true},
        preserveComments: function(node, comment){
          return /@heredoc|@preserve|@license|@cc_on/i.test(comment.value);
        }
      }))
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest('build/app'))

    gulp.src(['app/views/**/*.js'])
      //.pipe(combine({
      //  magixVersion: 2.0
      //}))
      //.pipe(gulp.dest('./build/app_debug/views'))
      //.pipe(sourcemaps.init())
      .pipe(uglify({
        output: {ascii_only:true},
        preserveComments: function(node, comment){
          return /@heredoc|@preserve|@license|@cc_on/i.test(comment.value);
        }
      }))
      //.pipe(sourcemaps.write())
      .pipe(gulp.dest('build/app/views'))
  })


  gulp.src([
    './app/exts/**/*.less'
  ])
    .pipe(less())
    .pipe(gulp.dest('./build/app_debug/exts/'))
    .pipe(cssmin({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/app/exts/'))

  gulp.src('./style/main.less')
    .pipe(less())
    .pipe(cssmin({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./build/style/'))
})

gulp.task('build', [
  'compress'
])
