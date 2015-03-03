
function logger (req, res, next) {
	console.log('#backend %s %s', req.method, req.url);
	next();
}

function holaAndres (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hola Andres, estas aprendiendo node.js');
}

var connect = require('connect');
var app = connect();

app
	.use(logger)
	.use(holaAndres)
	.listen(3000);