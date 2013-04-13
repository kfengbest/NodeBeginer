var s = require("./server");
var r = require("./router");
var h = require("./handler");

var handler = {};
handler["/"] = h.start;
handler["/start"] = h.start;
handler["/upload"] = h.upload;

s.start(r.route, handler);




