const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Welcome to the trap page');
    }
  else if(req.url == '/about') {
      res.end('This is about page')
  }else{
    res.end(`<h1>Ooops</h1>
    <p>We cant</p>
    <a href="/"> Go back </a>`)
  }
 
})

server.listen(5000);