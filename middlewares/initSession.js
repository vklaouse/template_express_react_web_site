const session = require('express-session');

module.exports = {
	init: (config) => {
		return session(config);
	}
}
