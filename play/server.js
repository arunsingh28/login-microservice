const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url === '/'){
      req.end('Hello world')
    }
  if(req.method === 'GET' && req.url === '/user'){
    req.end('this user page')
  } else{
    res.end('wrong URL')
  }
})


server.listen(3000,()=>{
console.log('server is runing on port 3000')
})
