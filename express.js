var express = require("express");
var app = express(); 
var port = 1337;

app.listen(port);

app.get('/', function(req,res){
	res.send('hello express');
});

app.get('/page1', function(req,res){
	res.send("This is /page1");
});

app.get('/page2', function(req,res){
	res.send("This is /page2");
});

app.get('/user/:id', function(req,res){
	res.send("You are User: " + req.params.id);
});

app.get('/tel/:number', function(req,res){
	res.send('The request number are: ' + req.params.number);
});


console.log("express server is starting listening to port " + port);

