var exec = require("child_process").exec;

function start(response){
	console.log("/start was called");

	var content = "empty";
	exec("ls -lah", function(error, stdout, stderr){
		content = stdout;
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(content);
		response.end();
	});	
}

function upload(response){
	console.log("/upload was called");

	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("/upload was called");
	response.end();
}

function find(response){
	console.log("/find was called");

	exec("find /", 
		{timeout:10000, maxBuffer:20000*1024},
		function(error, stdout, stderr){
			response.writeHead(200, {"Content-Type":"text/plain"});
			response.write(stdout);
			response.end();
	});
}

exports.start = start;
exports.upload = upload;
exports.find = find;

