var http = require('http');

var server = new http.Server();
server.on('request', function(req, res){

	res.writeHead(200, {'Content-Type':'text/html'});
	res.write('<h1>write by res.write();</h1>');
	res.end('<p>write by res.end();</p>')
});

server.listen(3000);
console.log("http server is listen to port 3000...");

var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('someEvent', function(arg1, arg2){
	console.log('Listener1', arg1, arg2);
});

emitter.on('someEvent', function(arg1,arg2){
	console.log('Listener2', arg1, arg2);
});

emitter.emit('someEvent', 'kaven', 2013);
console.log('emitted someEvent');