/*
The message.headers property in the Node.js HTTP module refers to the headers that are part of an HTTP request or response message. The headers contain metadata about the message, such as information about the content, encoding, and encoding type.

In an HTTP request, the headers include information such as the method used (GET, POST, etc.), the requested URL, and the type of data being sent (e.g., JSON). In an HTTP response, the headers include information such as the status code, 
the type of content being returned, and the encoding of the content.
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
        console.log(res.headers);
    })
    req.end()
})

setTimeout(() => {
    server.close()
}, 2000);

/*
{
  date: 'Tue, 31 Jan 2023 06:25:34 GMT',
  connection: 'close',
  'content-length': '13'
}*/