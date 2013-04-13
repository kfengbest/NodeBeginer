function start(){
	console.log("/start was called");
	
	return "/start was handled!"
}

function upload(){
	console.log("/upload was called");

	return "/uploaded was handler!"
}

exports.start = start;
exports.upload = upload;

