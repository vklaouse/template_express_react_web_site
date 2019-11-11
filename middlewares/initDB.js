const Promise = require('bluebird');

module.exports = {
	init: (config) => {
		const initOptions = {
			promiseLib: Promise
		};
		const pgp = require('pg-promise')(initOptions);
		var db = pgp(config);
		return db;
	}
}
