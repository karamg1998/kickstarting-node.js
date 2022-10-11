const fs=require('fs');

const requestHandler=(req,res)=>{
    const url=req.url;
    const method=req.method;

    if (url === '/' ) {
        res.write('<html>')
        res.write('<head><title>Welcome home</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name ="message"><button type="submit">Send</button></form></body>')
        res.write('<html>');
        return res.end();
      }
    
      if(url==='/message' && method ==='POST')
      {
        const body=[];
        req.on('data',(chunk)=>{
       console.log(chunk);
        body.push(chunk);
        });
        req.on('end',()=>{
        const parsedBody=Buffer.concat(body).toString();
        console.log(parsedBody);
        const message=parsedBody.split('=')[1];
         fs.writeFileSync('message.txt',message);
        });
       
        res.statusCode=302;//used for redirection
        res.setHeader('location','/');
        return res.end();
      }
      res.setHeader('Content-Type','text/html');
      res.write('<html>');
      res.write('<head><title>my first node server</title></head>')
      res.write('<body><h1>hello my first node.js server</h1></body>')
      res.write('</html>')
      res.end();
};
  
module.exports={
  handler:requestHandler,
  someText:'hello world'
}
  