'use strict';
import webpackConfig from './webpack.config'
import gulp from 'gulp'
import webpack from 'webpack'
import del from 'del'


gulp.task('build',['clean'], (callback) =>{
  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, (err, stats) =>{callback()
    });
});


gulp.task('dev',['build'], () =>{
  gulp.watch(['src/**/*.vue','src/**/*.js'], ['build']);
});



// 清理js/css
gulp.task('clean', () =>{
    return del('dist/*.js', { force: true });
});
