/*
Only valid for response obtained from http.ClientRequest.

The 3-digit HTTP response status code. E.G. 404.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log(res.statusCode)
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
200
*/