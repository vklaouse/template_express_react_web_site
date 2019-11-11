let debug = require('debug')('backend:server');
let https = require('https');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let fs = require('fs');

let controllers = require('./controllers/controllers.js');

let config = JSON.parse(
	fs.readFileSync(path.join(__dirname, '/config/config.json'), 'utf-8')
);
let db = require('./middlewares/initDB.js').init(config['db']);
let mail = require('./middlewares/initMail.js').init(config['mail']);
let session = require('./middlewares/initSession.js').init(config['session']);
let app = express();
let port = normalizePort(process.env.PORT || '3001');

app.set('port', port)
	.use(logger('dev'))
	.use(express.json())
	.use(express.urlencoded({ extended: true }))
	.use(express.static(path.join(__dirname, 'public')))
	.use(session)
	.use((req, res, next) => {
		if (!req.db)
			req.db = db;
		if (!req.mail)
			req.mail = mail;
		return next();
	}
);

controllers.initControllers(app);

app.get('/*', function(req, res) {
	res.sendFile(path.join(__dirname, '/public/index.html'), (err) => {
		if (err)
			res.status(500).send(err);
	})
});

let server = https.createServer({
		key: fs.readFileSync('./keys/server.key'),
		cert: fs.readFileSync('./keys/server.crt')
	}, app)
	.listen(port)
	.on('error', onError)
	.on('listening', onListening);

function normalizePort(val) {
	let port = parseInt(val, 10);
	if (isNaN(port)) return val;
	if (port >= 0) return port;
	return false;
}

function onError(error) {
	if (error.syscall !== 'listen') throw error;
	let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
	switch (error.code) {
		case 'EACCES':
			console.error(bind + ' requires elevated privileges');
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(bind + ' is already in use');
			process.exit(1);
			break;
		default:
			throw error;
	}
}

function onListening() {
	let addr = server.address();
	let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	debug('Listening on ' + bind);
}

module.exports = app;
