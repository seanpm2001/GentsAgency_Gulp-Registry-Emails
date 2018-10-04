const gulp = require('gulp');

const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const inlineImports = require('postcss-import');
const nested = require('postcss-nested');

module.exports = (config) => {
	const { src, dest } = config;

	const processors = [
		inlineImports({ path: src }),
		nested(),
		postcssPresetEnv({
			stage: 1,
			browsers: 'defaults',
			preserve: false,
		}),
	];

	const css = () => gulp
		.src(src)
		.pipe(postcss(processors))
		.pipe(gulp.dest(dest));

	return css;
};