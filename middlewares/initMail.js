const nodemailer = require('nodemailer');

module.exports = {
	init: (config) => {
		var smtpTransport = nodemailer.createTransport(config);
		return smtpTransport;
	}
}
