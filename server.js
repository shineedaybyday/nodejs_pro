var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello,NodeJs World!\n我是郝飞\n');
}).listen(9000);
console.log('Serve running at http://127.0.0.1:9000/');