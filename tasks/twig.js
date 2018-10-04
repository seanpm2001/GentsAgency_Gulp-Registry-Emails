const gulp = require('gulp');

const twing = require('gulp-twing');

module.exports = (config) => {
	const { src, dest } = config;

	const data = {}; // @todo
	const options = {
		templatePaths: ['.', src],
	};

	const twig = () => gulp
		.src(src)
		.pipe(twing(data, options))
		.pipe(gulp.dest(dest));

	return twig;
};