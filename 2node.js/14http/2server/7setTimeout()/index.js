/*
server.setTimeout() is a method available in the Node.js HTTP server object that sets the maximum amount of time to wait for the next incoming request before timing out the server.

The server.setTimeout() method takes two arguments: a timeout value in milliseconds, and an optional callback function. The timeout value is the maximum amount of time the server will wait for the next incoming request before timing out. The optional callback function is called if the server times out, and it is passed the socket and timeout as arguments.

By default, the server timeout is set to two minutes (120000 milliseconds). If the server has no incoming requests for the specified amount of time, the server will automatically close the connection and emit a timeout event.

*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})


server.setTimeout(1000, (socket) => {
    console.log('Server timeout')
    socket.end()
})
server.listen(3000, () => {
    console.log("server listening")
})


const request = http.request('http://localhost:3000/',(res) => {
    console.log('response received')
})
request.end()

/*
server listening
server called
response received
server called       // after reload in server
server called
Server timeout
Server timeout
*/