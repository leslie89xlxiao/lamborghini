var gutil = require('gulp-util');

exports.paths = {
  src: 'src',
  dist: 'release',
  tmp: '.tmp'
};

exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/require\.js/],
  directory: 'bower_components'
};

exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};

