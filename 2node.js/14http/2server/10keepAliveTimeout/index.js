/*
server.keepAliveTimeout is a property of the Node.js HTTP server object that specifies the maximum amount of time to wait for the next incoming request on a keep-alive connection.

A keep-alive connection is a type of HTTP connection that allows multiple requests to be sent over a single socket connection, rather than creating a new socket for each request. The server.keepAliveTimeout property sets the maximum amount of time the server will wait for the next incoming request on a keep-alive connection before timing out and closing the connection.

By default, the keep-alive timeout is set to 5000 milliseconds (5 seconds). The server.keepAliveTimeout property can be used to change the default keep-alive timeout value to any desired value in milliseconds.

*/

const http = require('http')

const server = http.createServer((req, res) => {
    console.log("server called")
    res.write("inside server write")
    res.end()
})

server.keepAliveTimeout = 100;

console.log(server.keepAliveTimeout)
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