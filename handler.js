var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");

function start(response,request){
	console.log("/start was called");

	var content = "empty";
	exec("ls -lah", function(error, stdout, stderr){
		content = stdout;
		response.writeHead(200,{"Content-Type":"text/plain"});
		response.write(content);
		response.end();
	});	
}

function upload(response,request){
	console.log("/upload was called");
	
	var form = new formidable.IncomingForm();
	form.parse(request,function(error,fields,files){

		fs.renameSync(files.uploadImage.path,"/Users/fengka/Sites/NodeBeginer/res/test.png");
		response.writeHead(200, {"Content-Type":"text/html"});
		response.write("received image:<br/>");
		response.write("<img src='/showImage' />");
		response.end();
	});

}

function find(response,request){
	console.log("/find was called");

	exec("find /", 
		{timeout:10000, maxBuffer:20000*1024},
		function(error, stdout, stderr){
			response.writeHead(200, {"Content-Type":"text/plain"});
			response.write(stdout);
			response.end();
	});
}

function form1(response,request){
	console.log("/form1 was called.");

	var body = '<html>' +
	'<head>' +
	'<meta http-equiv="Content-Type" content="text/html" />' +
	'</head>'+
	'<body>' +
	'<form action="/upload" enctype="multipart/form-data" method="post">' +
	'<input type="file" name="uploadImage" />' + 
	'<input type="submit" value="Upload iamge" />' +
	'</form>'+
	'</body>' +
	'</html>';

	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

function showImage(response,request){
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

var books = {
	"ISBN_1111": {"name":"node.js"}
}

function bookapi(response, request)
{
	console.log("bookapi was invoked");

	response.writeHead(200,{"Content-Type":"application/json;charset=UTF-8"});
	response.write(JSON.stringify(books));
	response.end();
}

exports.start = start;
exports.upload = upload;
exports.find = find;
exports.form1 = form1;
exports.showImage = showImage;
exports.bookapi = bookapi;



