const gulp = require('gulp');

const inlineCss = require('gulp-inline-css');

const css = require('./css');
const twig = require('./twig');
const images = require('./images');

module.exports = (config) => {
	const { src, dest } = config.html;

	const inline = () => gulp
		.src(src)
		.pipe(inlineCss({
			applyStyleTags: false,
			removeStyleTags: false,
			applyWidthAttributes: true,
			applyTableAttributes: true,
			removeHtmlSelectors: true,
		}))
		.pipe(gulp.dest(dest));

	const emails = gulp.series(
		gulp.parallel(
			css(config.css),
			twig(config.templates),
			images(config.images)
		),
		inline
	);

	emails.displayName = 'emails';

	return emails;
};