var http = require('http');
var uc = require('upper-case');
http.createServer(function(req,res){
  res.write(uc.upperCase('hi this mihir!'));
  res.end();
}).listen(7000);