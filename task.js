let http=require('http');

const server= http.createServer((get,send)=>{
    console.log('karamveer');
});

server.listen(4000);