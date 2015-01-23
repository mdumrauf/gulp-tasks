'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

module.exports = function () {
  return nodemon({
    script: './app/www/index.js',
    env: { 'NODE_ENV': process.env.NODE_ENV || 'development' },
    ignore: ['./test/**/*.js'],
    nodeArgs: ['--debug']
  });
};
