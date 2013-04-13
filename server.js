var http = require("http");
var url = require("url");


function start(route, handle){
	function onRequest(request, response){
		console.log("request received...");
		var pathname = url.parse(request.url).pathname;
		console.log(request.url);
	
		var postData = "";
		var dataListener = function(postDataChunk){
			postData += postDataChunk;
			console.log("Received new post data");
		}
		var endListener = function(){
			route(handle,pathname,response, postData);
		}

		request.setEncoding("utf8");
		request.addListener("data", dataListener);
		request.addListener("end", endListener);
	}
	
	var server = http.createServer(onRequest);
	server.listen(8888);
	console.log("Server has started...");
}

exports.start = start;

