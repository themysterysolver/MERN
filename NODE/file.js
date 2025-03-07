var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('dummy.txt',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
