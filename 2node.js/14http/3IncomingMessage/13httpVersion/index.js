/*
In case of server request, the HTTP version sent by the client. 
In the case of client response, the HTTP version of the connected-to server. 

Probably either '1.1' or '1.0'.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusMessage = 'success'
    console.log(req.httpVersion)
    res.end('Hello, World!')
})

server.listen(3000, () => {
    const option = {
        host: 'localhost',
        port: '3000', 
        path: '/',
        method: 'get'
    }
    console.log('Server listening on port 3000')
    const req = http.request(option, (res) => {
    })
    req.end()
})

setTimeout(() => server.close(), 2000)
/*
Server listening on port 3000
1.1
*/