const http = require("http");

const server = http.createServer((req, res) => {
    
  if(req.url == "/soufien"){
    res.write('soufien')
  }else
    res.write('ma tlabch')
  
  res.end();
});

server.listen(3000, () => console.log("serveur yekhdem"));
