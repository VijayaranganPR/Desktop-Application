/*
The message.method property in the Node.js HTTP module is used to get the HTTP method of an HTTP request. 
An HTTP method is the type of request being made, such as GET, POST, PUT, DELETE, etc.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.method)
    res.end('Hello, World!')
})

server.listen(3000, () => {
    option = {
        host: 'localhost',
        port: '3000',
        path: '/',
        method: 'post'
    }
    console.log('Server listening on port 3000')
    const req = http.request(option,(res) => {
})
    req.end()
})

setTimeout(() => {
    server.close()
}, 2000);

/*
POST
*/