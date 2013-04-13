var http = require("http");

function start(){
	function onRequest(request, response){
		console.log("request received...");
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello world");
		response.end();
	}
	
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("Server has started...");
}

exports.start = start;

