function route(handle,pathname){
	console.log("Routing request for " + pathname);

	if(typeof handle[pathname] === 'function' ){
		return handle[pathname]();
	}else{
		console.log("No request handler for " + pathname);
		
		return "404 not found";
	}
	
}

exports.route = route;


