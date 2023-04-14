/*
Similar to message.headers, but there is no join logic and the values are always arrays of strings, 
even for headers received just once.
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
        console.log(res.headersDistinct)
    })
    req.end()
})

setTimeout(() => {
    server.close()
}, 2000);

/*
{
  date: [ 'Tue, 31 Jan 2023 06:26:52 GMT' ],        
  connection: [ 'close' ],
  'content-length': [ '13' ]
}
*/