/*
The message.rawHeaders property in the Node.js HTTP module refers to an array of strings that represents the raw headers in an HTTP request or response message. 
The headers contain metadata about the message, such as information about the content, encoding, and encoding type.

In the message.rawHeaders property, headers are represented as alternating keys and values in the array. 
The first item in the array is the header name, followed by its corresponding value, followed by the next header name, etc.
*/

const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello, World!')
})

server.listen(3000, () => {
    option = {
        host: 'localhost',
        port: '3000',
        path: '/',
        method: 'get'
    }
    console.log('Server listening on port 3000')
    const req = http.request(option,(res) => {
    console.log(res.rawHeaders)
})
    req.end()
})

setTimeout(() => {
    server.close()
}, 2000);

/*
[
  'Date',
  'Tue, 31 Jan 2023 06:36:06 GMT',
  'Connection',
  'close',
  'Content-Length',
  '13'
]
*/