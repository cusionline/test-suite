const
  Gulp = require('gulp'),
  WebpackStream = require("webpack-stream"),
  Webpack = require("webpack");



Gulp.task("webpack:dev", (done) => {

  WebpackStream( require("./webpack-config.js" ) , Webpack)
    .pipe( Gulp.dest("./build/") )
  done();

});

Gulp.task('default', ['webpack:dev']);