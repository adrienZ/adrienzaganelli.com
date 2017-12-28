// =======================================================================//
// !  DEPENDENCIES                                                        //
// =======================================================================//
const gulp = require('gulp')
const path = require('path')

const urls = require('./config/urls');

// =======================================================================//
// !  CONFIG ASSETS                                                       //
// =======================================================================//
gulp.task('importDatas', () => {
  gulp.src(urls.APP_ASSETS_URL + 'media/data/*.json').pipe(gulp.dest(urls.DIST_URL + 'datas'));
});
gulp.task('importImages', () => {
  gulp.src(urls.APP_ASSETS_URL + 'media/img/**/*').pipe(gulp.dest(urls.DIST_ASSETS_URL + 'media/img/'));
});
gulp.task('importVideos', () => {
  gulp.src(urls.APP_ASSETS_URL + 'media/video/**/*').pipe(gulp.dest(urls.DIST_ASSETS_URL + 'media/video/'));
});
gulp.task('importFonts', () => {
  gulp.src(urls.APP_ASSETS_URL + 'media/fonts/**/*').pipe(gulp.dest(urls.DIST_ASSETS_URL + 'media/fonts/'));
});

// =======================================================================//
// ! PROD                                                                 //
// =======================================================================//
gulp.task('build', ['importImages', 'importDatas', 'importVideos', 'importFonts']);
