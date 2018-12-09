const http = require('http');
const port = 8080;


http.createServer((req,res)=>{
    console.log("접속!!",req);
    res.write('<h1>Hello Node! </h1>');
    res.end('<p>Hello Server! </p>');
}).listen(port,()=>{
    console.log(port,'번 포트에서 서버 대기 중 입니다.');
});