const http = require('http');
http
.createServer(function(req, res){
    console.log("requests มาอีกแล้ววววว");
    res.write('Hello from node web server');
    res.end();
})
.listen(80);
console.log('one')
console.log('two')
console.log('three')
