var http = require('http');
var qs = require('querystring');

var contents = qs.stringify(
	{
		name: 'kaven',
		email: 'a.b@xxx.com',
		address:'a.b.c',
	});

var options = {
	host : 'localhost/~fengka',
	path : '/b.php',
	method: 'POST',
	header : {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length' : contents.length
	}
};

var req = http.request(options,function(res){
	res.setEncoding('utf8');
	res.on('data',function(data){
		console.log(data);
	});

});

req.write(contents);
req.end();