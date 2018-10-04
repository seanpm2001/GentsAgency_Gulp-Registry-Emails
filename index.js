const inline = require('./tasks/inline');

const TASKS = Symbol('TASKS');

class Registry {
	constructor(config = {}) {
		this[TASKS] = {};
		this.config = config;
	}

	init(taker) {
		const configured = inline(this.config);

		this.set('default', configured);

		if (typeof taker.watch === 'function') {
			// The registry is consumed by a tool that supports watching
			// (probably Gulp)
			const watch = () => {
				taker.watch(this.config.src, configured);
			};

			this.set('watch', taker.series(configured, watch));
		}

		return this;
	}

	get(task) {
		return this[TASKS][task];
	}

	set(task, fn, options = {}) {
		const defaults = { watch: false, default: true };

		this[TASKS][task] = fn;

		return this[TASKS][task];
	}

	tasks() {
		return Object.keys(this[TASKS]).reduce((tasks, name) => {
			Object.assign(tasks, { [name]: this.get(name) });
			return tasks;
		}, {});
	}
}

module.exports = Registry;