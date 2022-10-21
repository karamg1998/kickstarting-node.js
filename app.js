const http=require('http');

const server=http.createServer((req,res)=>{
res.write('<h1>karamveer</h1>')

    console.log('karamveer');
});

server.listen(4000);