let http = require('http');


const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>my first node server</title></head>')
  res.write('<body><h1>hello my first node.js server</h1></body>')
  res.write('</html>')
  res.end();
});

server.listen(4000);