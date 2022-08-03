const http = require('http');

const server = http.createServer((req,res)=>{
   res.end("soomro bai smnmdd")
})

server.listen(4000,"localhost",()=>{
    console.log('Server is not workin on (http://localhost:4000)')
})