var http = require("http");
var url = require("url");


function start(){
	function onRequest(request, response){
		console.log("request received...");
		var pathname = url.parse(request.url).pathname;
		console.log(request.url);

		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write("Hello node.js");
		response.write("\n url:" + request.url);
		response.write("\n pathname:" + pathname);
		response.end();
	}
	
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("Server has started...");
}

exports.start = start;

