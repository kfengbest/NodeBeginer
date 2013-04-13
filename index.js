var s = require("./server");
var r = require("./router");
var h = require("./handler");

var handler = {};
handler["/"] = h.start;
handler["/start"] = h.start;
handler["/upload"] = h.upload;
handler["/find"] = h.find;
handler["/form1"] = h.form1;
handler["/showImage"] = h.showImage;
handler["/bookapi"] = h.bookapi;


s.start(r.route, handler);




