const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.listen(3000,()=>{
    console.log("server listening")
})

setTimeout(() => {
    console.log('closed')
    server.close()
}, 2000);

const request = http.request('http://localhost:3000/',(res) => {
    res.on('data', (chunk) => {
        console.log(chunk.toString())
    })
})

request.end('end Statement', () => {
    console.log('request ended')
})

/*
server listening
request ended
server
inside server write
closed
*/