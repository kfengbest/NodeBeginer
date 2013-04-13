var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");

function start(response,postData){
	console.log("/start was called");

	var content = "empty";
	exec("ls -lah", function(error, stdout, stderr){
		content = stdout;
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(content);
		response.end();
	});	
}

function upload(response,postData){
	console.log("/upload was called");

	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("You send: " + postData);
	response.end();
}

function find(response,postData){
	console.log("/find was called");

	exec("find /", 
		{timeout:10000, maxBuffer:20000*1024},
		function(error, stdout, stderr){
			response.writeHead(200, {"Content-Type":"text/plain"});
			response.write(stdout);
			response.end();
	});
}

function form1(response,postData){
	console.log("/form1 was called.");

	var body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html" />' +
	'</head>'+
	'<body>' +
	'<form action="/upload" method="post">' +
	'<textarea name="text" rows="20", cols="60"></textarea>' +
	'<input type="submit" value="submit text" />' +
	'</form>' +
	'<form action="/showImage" enctype="multipart/form-data" method="post">' +
	'<input type="file" name="uploadImage" />' + 
	'<input type="submit" value="Upload iamge" />' +
	'</form>'+
	'</body>' +
	'</html>';

	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

function showImage(response,postData){
	console.log("/ShowImage was called");

	fs.readFile("/Users/fengka/Sites/NodeBeginer/res/test.png","binary", function(error, file){
		if(error){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write(error + "\n");
			response.end();
		}
		else{
			response.writeHead(200,{"Content-Type":"image/png"});
			response.write(file,"binary");
			response.end();
		}
	});

}

exports.start = start;
exports.upload = upload;
exports.find = find;
exports.form1 = form1;
exports.showImage = showImage;


