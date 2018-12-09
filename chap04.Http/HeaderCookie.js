const http = require("http");

const parseCookies = (cookie = "") =>
  cookie
    .split(";")
    .map(value => value.split("="))
    .map(([k, ...vs]) => [k, vs.join("=")])
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer((req, res) => {
    const cookie = parseCookies(req.headers.cookie);
    console.log(req.url,cookie);
    res.writeHead(200,{'Set-Cookie':'mycookie=test'});
    res.end('hello cookie');

}).listen(8081,()=>{
    console.log('8081 포트 에서 서버 대기중');
});
