/*
server.maxRequestsPerSocket is a property of the Node.js HTTP server object that specifies the maximum number of incoming requests that can be handled by a single server socket.

This property is used to prevent a single socket from handling too many incoming requests, which can cause memory or processing resource exhaustion on the server. When the number of incoming requests for a single socket reaches the maxRequestsPerSocket value, the socket is automatically closed and a new socket is created to handle subsequent requests.

The default value for server.maxRequestsPerSocket is not specified in the Node.js documentation, so it is likely to be set to an implementation-defined value.

*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.maxRequestsPerSocket = 100;

console.log(server.maxRequestsPerSocket)
server.listen(3000, () => {
    console.log("server listening")
})

setTimeout(() => {
    server.close()
}, 1000);

const request = http.request('http://localhost:3000/',(res) => {
    console.log('response received')
})
request.end()

/*
100
server listening
server called
response received
*/