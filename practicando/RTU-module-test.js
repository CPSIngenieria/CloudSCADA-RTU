var id = 666;

var estado = 'activo';

function leer(){
	console.log('Leyendo del modbus');
}

function ping(){
	console.log('PONG!');
}

module.exports = {
	leer: leer,
	ping: ping,
	id: id,
	estado: estado
}