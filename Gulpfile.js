var gulp = require('gulp'),
	webpack = require('gulp-webpack'),
	less = require('gulp-less'),
	cssmin = require('gulp-minify-css'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	clean = require('gulp-clean'),
	webpack = require('gulp-webpack'),
	vue = require('vue-loader'),
	uglify = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	htmlmin = require('gulp-htmlmin'),
	imagemin = require('gulp-imagemin'),
	zip = require("gulp-zip"),
	tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port =  35729,
	livereload = require("gulp-livereload");

var webpack_config = require('./webpack.config.js');



gulp.task('vue',function(){
	var vueSrc = './src/js/proDetail.js',
        vueDst = './dist/js';
        
    return gulp.src(vueSrc)
        .pipe(webpack(webpack_config))
        .pipe(jshint())
        .pipe(jshint(stylish))
//      .pipe(uglify())
		.pipe(livereload(server))
        .pipe(gulp.dest('dist/js/'));
})

gulp.task('less',function(){
	var lessSrc = './src/less/*.less',
		lessDes = './dist/css';
	
	return gulp.src(lessSrc)
		.pipe(less())
//      .pipe(sourcemaps.write('./map'))
		.pipe(cssmin())
		.pipe(livereload(server))
		.pipe(gulp.dest(lessDes));
})

gulp.task('images', function(){
    var imgSrc = './src/images/**/*',
        imgDst = './dist/images';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(livereload(server))
        .pipe(gulp.dest(imgDst));
})

gulp.task('clean',function(){
	return gulp.src('./dist')
    	.pipe(clean());
})

gulp.task('html',function(){
	var htmlSrc = './src/*.html',
        htmlDst = './dist',
        options = {
	        removeComments: true,//清除HTML注释
	        collapseWhitespace: false,//压缩HTML
	        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
	        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
	        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
	        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
	        minifyJS: false,//压缩页面JS
	        minifyCSS: false//压缩页面CSS
    	};
        
    gulp.src(htmlSrc)
    	.pipe(htmlmin(options))
    	.pipe(livereload(server))
    	.pipe(gulp.dest(htmlDst));
})


gulp.task('testWatch', function () {
    gulp.watch('./src/less/*.less', ['less']); //当所有less文件发生改变时，调用testLess任务
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/js/*.js', ['vue']);
//  gulp.watch('./src/js/*.js', ['js']);
});


