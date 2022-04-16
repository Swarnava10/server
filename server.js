//server creation
// we will import http 
const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
    console.log(req.url);
    console.log(req.method);


    res.setHeader('content-type','text/plain');
    res.write('hello world :)');
    res.end();

});

server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');

});

