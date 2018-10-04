# Gents Agency E-mails Gulp Registry

[![dependencies Status](https://david-dm.org/gentsagency/gulp-registry-emails/status.svg)](https://david-dm.org/gentsagency/gulp-registry-emails)

This task registry provides a workflow to simplify e-mail template development. It optimizes images, inlines CSS and allows you to work with Twig.

## Installation

Install the registry through NPM:

```sh
npm i --save-dev gulp@^4.0.0 @gentsagency/gulp-registry-emails
```

Create a `gulpfile.js` and point it to the registry.

```js
const gulp = require('gulp');
const config = require('./gulp/config');
const Registry = require('@gentsagency/gulp-registry-emails');

const tasks = new Registry(config);

gulp.registry(tasks);
```

## Configuration

Find an example configuration file below

```js
const paths = {
	src: './gulp',
	assets: {
		src: './gulp/assets',
		dest: './build/assets',
	},
	templates: {
		src: './gulp/templates',
		dest: './build',
	},
	html: {
		src: './build',
		dest: './build',
	}
};

module.exports = {
	src: paths.src,
	css: {
		src: `${paths.assets.src}/css/*.css`,
		dest: `${paths.assets.dest}/css`,
	},
	images: {
		src: `${paths.assets.src}/images/**`,
		dest: `${paths.assets.dest}/images`,
	},
	templates: {
		src: `${paths.templates.src}`,
		dest: `${paths.templates.dest}`,
	},
	html: {
		src: `${paths.html.src}/*.html`,
		dest: `${paths.html.dest}`,
	},
};
```

## Usage

`$ gulp` runs a one-time build.

`$ gulp watch` starts the watcher.

## Troubleshooting

### Upgrading to Gulp 4 broke things for me!

Re-install Gulp globally, your older projects should still work (using the Gulp 3 version installed in the projects `/node_modules`)

```sh
npm rm -g gulp
rm /usr/local/share/man/man1/gulp.1
npm i -g gulp-cli
```
