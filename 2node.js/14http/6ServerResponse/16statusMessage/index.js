/*
The statusMessage property can be used to set a custom status message for the HTTP response. 
The status message is a human-readable string that provides more information about the status code. 
By default, the status message is automatically set based on the status code, 
but you can set it to a custom value if you want to provide more specific information.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.statusMessage = 'success'
    console.log(res.statusMessage)
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
success
*/