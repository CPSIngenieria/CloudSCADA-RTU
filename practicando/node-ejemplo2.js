
var fs = require('fs');
var stream = fs.createReadStream('assets/ejemplo2.json');

stream.setEncoding('utf8');

stream.on('data', function (chunk) {
	console.log(chunk);
});

stream.on('end', function () {
	console.log('Terminado')
});