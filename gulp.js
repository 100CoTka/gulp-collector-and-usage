"use strict";

const { src, dest } = require('gulp');
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const removeComments = require('gulp-strip-comments');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rigger = require('gulp-rigger');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const del = require('del');
const panini = require('panini');
const { watch } = require('browser-sync');
const browSersync = require('browser-sync').create();

var path = {
	// build files
	build: {
		html: 'dist/',
		js: 'dist/assets/js/',
		css: 'dist/assets/css/',
		images: 'dist/assets/img/'
	},
	// from src => build
	src: {
		html: 'src/*.html',
		js: 'src/assets/js/*.js',
		css: 'src/assets/sass/style.scss',
		images: 'src/assets/img/**/*.{jpg,png,svg,gif,web,webp,ico}'
	},
	//watching for files
	watch: {
		html: 'src/**/*.html',
		js: 'src/assets/js/**/*.js',
		css: 'src/assets/sass/**/*.scss',
		images: 'src/assets/img/**/*.{jpg,png,svg,gif,web,webp,ico}'
	},
	// all compiler files
	clean: './dist'
}

