const gulp = require('gulp');
const minify = require('gulp-minify');//压缩js
const del = require('del')
const path = require('path');
const webpack = require('webpack-stream');
const sass = require('gulp-sass');

const minifyConfig = {
    ext: {
        min: '.js'
    },
    noSource: true,
}


function resolve(str) {
    return path.resolve('../../', str)
}

gulp.task('clean:dist', function () {
    return del([resolve('dist')], {force: true})
})
gulp.task('compress', ['clean:dist'], function () {
    return gulp.src([resolve('src/start.js'),
        resolve('src/gaming.js'),
        resolve('src/end.js'),
        resolve('src/preload.js')
    ])
        .pipe(minify(minifyConfig))
        .pipe(gulp.dest(resolve('dist/js/')))
})
gulp.task('scss',['clean:dist'],function () {
    return gulp.src(resolve('src/css/base.scss'))
        .pipe(sass())
        .pipe(gulp.dest(resolve('dist/css/')));
})

gulp.task('webpack', ['compress','scss'],function () {
    return gulp.src(resolve('src/index.js'))
        .pipe(webpack(require(resolve('src/build/webpack.config.js'))))
        .pipe(gulp.dest(resolve('dist')))
})


gulp.task('default', ['webpack']);

