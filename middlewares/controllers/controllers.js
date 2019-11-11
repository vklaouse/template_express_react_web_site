const multer  = require('multer');

// let tools = require('../helpers/');

module.exports = {
	initControllers: (router) => {
		let storage =   multer.memoryStorage();
		const upload = multer({ storage: storage })
	}
}
